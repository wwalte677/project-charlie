package com.projectcharlie.model;

import java.util.UUID;
import java.time.LocalDateTime;

public class Ballot {
    
    private final UUID id;
    private final UUID userId;
    private final UUID eventId;
    private final int version;
    private final BallotState status;
    private final LocalDateTime createdAt;

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
