package com.projectcharlie.model;

import jakarta.persistence.*;
import java.util.UUID;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue
    private UUID id;

    private String eventTitle;
    private String description;
    private LocalDateTime startAt;
    private LocalDateTime endAt;

    @Enumerated(EnumType.STRING)
    private EventState state = EventState.ACTIVE;

    // Required by JPA
    public Event() {}

    public Event(String eventTitle, String description, LocalDateTime startAt, LocalDateTime endAt) {
        this.eventTitle = eventTitle;
        this.description = description;
        this.startAt = startAt;
        this.endAt = endAt;
        this.state = EventState.ACTIVE;
    }

    // Getters
    public UUID getId() { 
        return id; 
    }

    public void setId(UUID id) { 
        this.id = id; 
    }

    public String getEventTitle() { 
        return eventTitle; 
    }

    public void setEventTitle(String eventTitle) { 
        this.eventTitle = eventTitle; 
    }

    public String getDescription() { 
        return description; 
    }

    public void setDescription(String description) { 
        this.description = description;
    }

    public LocalDateTime getStartAt() { 
        return startAt; 
    }

    public void setStartAt(LocalDateTime startAt) {
        this.startAt = startAt;
    }

    public LocalDateTime getEndAt() { 
        return endAt; 
    }

    public void setEndAt(LocalDateTime endAt) { 
        this.endAt = endAt;
    }

    public EventState getState() { 
        return state; 
    }

    public void setState(EventState state) { 
        this.state = state;
    }

}