package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.projectcharlie.model.Event;
import com.projectcharlie.model.Choice;
import com.projectcharlie.repository.EventRepository;
import com.projectcharlie.repository.ChoiceRepository;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class EventController {

    @Autowired
    private EventRepository repo;

    @Autowired
    private ChoiceRepository choiceRepo;

    @GetMapping("/events")
    public List<Event> getEvents() {
        return repo.findAll();
    }

    @PostMapping("/event")
    public Event createEvent(@RequestBody Event event) {
        return repo.save(event);
    }

    // --------------------------- ADD BUTTON
    @PostMapping("/events/{eventId}/choices")
    public ResponseEntity<Event> addChoice(
        @PathVariable UUID eventId,
        @RequestBody Choice incomingChoice
    ) {
        return repo.findById(eventId)
            .map(event -> {
                Choice choice = new Choice();
                choice.setText(incomingChoice.getText());
                choice.setEvent(event);
                choiceRepo.save(choice);
                return ResponseEntity.ok(repo.findById(eventId).get());
            })
            .orElse(ResponseEntity.notFound().build());
    }

    // --------------------------- REMOVE BUTTON
    @DeleteMapping("/events/{eventId}/choices/{choiceId}")
    public ResponseEntity<Object> deleteChoice(
        @PathVariable UUID eventId,
        @PathVariable UUID choiceId
    ) {
        return repo.findById(eventId)
            .map(event -> {
                choiceRepo.deleteById(choiceId);
                return ResponseEntity.noContent().build();
            })
            .orElse(ResponseEntity.notFound().build());
    }
}