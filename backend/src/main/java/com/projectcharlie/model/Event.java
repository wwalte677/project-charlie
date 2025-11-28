package com.projectcharlie.model;

import jakarta.persistence.*;
import java.util.UUID;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

    // One-to-Many relationship with Choice
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Choice> choices = new ArrayList<>();

    public Event() {}

    public Event(String eventTitle, String description, LocalDateTime startAt, LocalDateTime endAt) {
        this.eventTitle = eventTitle;
        this.description = description;
        this.startAt = startAt;
        this.endAt = endAt;
        this.state = EventState.ACTIVE;
    }

    public UUID getId() { 
        return id; 
    }
    public String getEventTitle() { 
        return eventTitle; 
    }
    public String getDescription() {
        return description; 
    }
    public LocalDateTime getStartAt() { 
        return startAt; 
    }
    public LocalDateTime getEndAt() { 
        return endAt; 
    }
    public EventState getState() { 
        return state; 
    }
    public void setState(EventState state) { 
        this.state = state; 
    }

    public List<Choice> getChoices() { 
        return choices; 
    }
    public void setChoices(List<Choice> choices) { 
        this.choices = choices;
    }
}