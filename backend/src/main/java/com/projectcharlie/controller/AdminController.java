package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.projectcharlie.model.Event;
import com.projectcharlie.repository.EventRepository;

import java.util.List;

@RestController
@RequestMapping("/api/admin")

// Allow CORS for local development
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:4173"
})

public class AdminController {

    @Autowired
    private EventRepository eventRepository;

}