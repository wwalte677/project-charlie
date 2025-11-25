package com.projectcharlie.model;

import jakarta.persistence.*;
import java.util.UUID;
import java.time.LocalDateTime;
import com.projectcharlie.model.EventState;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private final UUID id;
    private String eventTitle;
    private String description;
    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private EventState state;

    public Event(UUID id, String eventTitle, String description, LocalDateTime startAt, LocalDateTime endAt, EventState state) {
        this.id = id;
        this.eventTitle = eventTitle;
        this.description = description;
        this.startAt = startAt;
        this.endAt = endAt;
        this.state = state;
    }

    // Getters/setters
    public UUID getId() { 
        return id; 
    }

    public String getEventTitle() { 
        return eventTitle; 
    }

    public String getDescription() { 
        return description; 
    }

    public LocalDateTime getstartAt() { 
        return startAt; 
    }

    public LocalDateTime getendAt() { 
        return endAt; 
    }

    public EventState getState() {
        return state;
    }
}