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
    private BallotState state;
    private LocalDateTime createdAt;

    public Ballot(UUID id, UUID userId, UUID eventId, int version, BallotState state, LocalDateTime createdAt){
        this.id = id;
        this.userId = userId;
        this.eventId = eventId;
        this.version = version;
        this.state = state;
        this.createdAt = createdAt;
    }

    public UUID getId(){
        return id;
    }

    public void setId(UUID id){
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId){
        this.userId = userId;
    }

    public UUID getEventId() {
        return eventId;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version){
        this.version = version;
    }

    public BallotState getState() {
        return state;
    }

    public void setState(BallotState state){
        this.state = state;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt){
        this.createdAt = createdAt;
    }

}
