package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.projectcharlie.model.Event;
import com.projectcharlie.repository.EventRepository;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class EventController {

    @Autowired
    private EventRepository repo;

    @GetMapping("/events")
    public List<Event> getEvents() {
        return repo.findAll();
    }

    @PostMapping("/event")
    public Event createEvent(@RequestBody Event event) {
        return repo.save(event);
    }
}