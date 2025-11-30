package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.transaction.annotation.Transactional;

import com.projectcharlie.model.Ballot;
import com.projectcharlie.model.BallotState;
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

// Allow CORS for local development
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:4173"
})

@RequestMapping("/")
public class VoteController {

    private final EventService eventService;
    private final BallotService ballotService;
    private final AuditService auditService;

    public VoteController(
        EventService eventService, 
        BallotService ballotService, 
        AuditService auditService) {
        this.eventService = eventService;
        this.ballotService = ballotService;
        this.auditService = auditService;
    }

    public static class VoteRequest{
        public UUID selection;
    }

    @PostMapping("/cast/{eventId}")
    @ResponseStatus(HttpStatus.CREATED)
    @Transactional
    public Confirmation castOrModify(
        @PathVariable UUID eventId,
        @RequestParam UUID userId,
        @RequestBody VoteRequest voteRequest){

        ensureOpen(eventId);
        
        Optional<Ballot> previousBallot = ballotService.getActiveBallot(userId, eventId, BallotState.ACTIVE);

        previousBallot.ifPresent(ballot -> {
            ballotService.supersedePreviousBallot(ballot.getId());
        });

        Ballot newBallot = ballotService.insertActiveBallot(
            userId, 
            eventId, 
            List.of(voteRequest.selection), 
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
