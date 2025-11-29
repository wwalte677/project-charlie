package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.projectcharlie.model.*;
import com.projectcharlie.repository.BallotRepository;
import com.projectcharlie.repository.EventRepository;

import java.util.*;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class ResultsController {

    @Autowired
    private BallotRepository ballotRepo;

    @Autowired
    private EventRepository eventRepo;

    @GetMapping("/results/{eventId}")
    public Map<String, Object> getResults(@PathVariable UUID eventId) {

        // Get event
        Event event = eventRepo.findById(eventId)
            .orElseThrow(() -> new RuntimeException("Event not found"));

        // Only allow results for CLOSED events
        if (event.getState() != EventState.CLOSED) {
            throw new ResponseStatusException(
                HttpStatus.FORBIDDEN,
                "Results not available until event is closed."
            );
        }

        // Get only ACTIVE ballots for this event (corrected)
        List<Ballot> activeBallots = ballotRepo
            .findByEventId(eventId).stream()
            .filter(b -> b.getState() == BallotState.ACTIVE)
            .toList();

        // Initialize counts
        Map<UUID, Long> counts = new HashMap<>();
        for (Choice c : event.getChoices()) {
            counts.put(c.getId(), 0L);
        }

        // Count selections
        for (Ballot b : activeBallots) {
            for (UUID choiceId : b.getSelections()) { 
                counts.put(choiceId, counts.get(choiceId) + 1);
            }
        }

        long totalVotes = activeBallots.size();

        // Build result list
        List<Map<String, Object>> choiceResults = new ArrayList<>();
        for (Choice c : event.getChoices()) {
            Map<String, Object> entry = new HashMap<>();
            entry.put("choiceId", c.getId());
            entry.put("text", c.getText());
            entry.put("votes", counts.get(c.getId()));
            choiceResults.add(entry);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("eventTitle", event.getEventTitle());
        response.put("choices", choiceResults);
        response.put("totalVotes", totalVotes);

        return response;
    }
}