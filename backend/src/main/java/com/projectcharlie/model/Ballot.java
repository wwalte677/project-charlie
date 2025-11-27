package com.projectcharlie.model;

import java.util.UUID;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "ballots")
public class Ballot {
    @Id
    
    private UUID id;
    private UUID userId;
    private UUID eventId;
    private int version;
    private BallotState status;
    private LocalDateTime createdAt;

    public Ballot(UUID id, UUID userId, UUID eventId, int version, BallotState status, LocalDateTime createdAt){
        this.id = id;
        this.userId = userId;
        this.eventId = eventId;
        this.version = version;
        this.status = status;
        this.createdAt = createdAt;
    }

    public UUID getId(){
    return id;
    }

    public UUID getUserId() {
        return userId;
    }

    public UUID getEventId() {
        return eventId;
    }

    public int getVersion() {
        return version;
    }

    public BallotState getStatus() {
        return status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
