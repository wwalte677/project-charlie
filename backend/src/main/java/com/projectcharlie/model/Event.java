package com.projectcharlie.model;

import jakarta.persistence.*;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventName;
    private String description;
    private String startDate;
    private String endDate;

    public Event() {}

    public Event(String eventName, String description, String startDate, String endDate) {
        this.eventName = eventName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // Getters/setters
    public Long getId() { 
        return id; 
    }
    public void setId(Long id) {
        this.id = id; 
    }

    public String getEventName() { 
        return eventName; 
    }
    public void setEventName(String eventName) { 
        this.eventName = eventName; 
    }

    public String getDescription() { 
        return description; 
    }
    public void setDescription(String description) { 
        this.description = description; 
    }

    public String getStartDate() { 
        return startDate; 
    }
    public void setStartDate(String startDate) { 
        this.startDate = startDate; 
    }

    public String getEndDate() { 
        return endDate; 
    }
    public void setEndDate(String endDate) { 
        this.endDate = endDate; 
    }
}