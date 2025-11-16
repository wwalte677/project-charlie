package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.projectcharlie.model.Event;
import com.projectcharlie.repository.EventRepository;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/event")
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @GetMapping("/events")
    public List<Event> getEvents() {
        return eventRepository.findAll();
    }
}