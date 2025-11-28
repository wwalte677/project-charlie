package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.projectcharlie.model.Ballot;
import com.projectcharlie.model.Confirmation;
import com.projectcharlie.model.Event;
import com.projectcharlie.service.AuditService;
import com.projectcharlie.service.BallotService;
import com.projectcharlie.service.EventService;

import java.util.UUID;
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

@RestController
public class VoteController {
    private final EventService eventService;
    private final BallotService ballotService;
    private final AuditService auditService;

    public VoteController(EventService eventService, BallotService ballotService, AuditService auditService) {
        this.eventService = eventService;
        this.ballotService = ballotService;
        this.auditService = auditService;
    }

    public static class VoteRequest{
        public UUID userId;
        public List<UUID> selection;
    }

    @PostMapping("/cast/{eventId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Confirmation castOrModify(
        @PathVariable UUID eventId,
        @RequestParam UUID userId,
        @RequestBody VoteRequest requestPayload){

        ensureOpen(eventId);
        
        Optional<Ballot> previousBallot = ballotService.getActiveBallot(userId, eventId);

        previousBallot.ifPresent(ballot -> {
            ballotService.supersedePreviousBallot(ballot.getId());
        });

        Ballot newBallot = ballotService.insertActiveBallot(
            userId, 
            eventId, 
            requestPayload.selection, 
            previousBallot);

        String correlationId = eventId.toString() + "_" + userId.toString();
        auditService.log("VOTE_CAST", eventId.toString(), correlationId);
        return new Confirmation(newBallot.getId(), newBallot.getVersion(), LocalDateTime.now());
    }

    private Event ensureOpen(UUID eventId){
        Event event = eventService.getEvent(eventId)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, 
                "Event not found with ID: " + eventId
            )); 
        
        if (!eventService.isOpen(event)) {
            throw new ResponseStatusException(
                HttpStatus.FORBIDDEN, 
                "Voting for event " + eventId + " is currently closed or not yet started."
            );
        }
        
        return event;
    }
}
