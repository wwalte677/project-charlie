package com.projectcharlie.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "choices")
public class Choice {

    @Id
    @GeneratedValue
    private UUID id;

    private String text;

    @ManyToOne(fetch = FetchType.LAZY) // THIS MEANS THAT many choices belongs to a specific event
    @JoinColumn(name = "event_id") //point to event table in database
    @JsonIgnore // needed to stop infinite looping
    private Event event;

    public Choice() {}

    public Choice(String text, Event event) {
        this.text = text;
        this.event = event;
    }

    public UUID getId() { 
        return id; 
    }

    public String getText() { 
        return text; 
    }
    public void setText(String text) { 
        this.text = text; 
    }

    public Event getEvent() { 
        return event; 
    }
    public void setEvent(Event event) { 
        this.event = event; 
    }
}