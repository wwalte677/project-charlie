package com.projectcharlie.model;

import java.util.UUID;
import java.util.List;
import java.time.LocalDateTime;

import jakarta.persistence.*;
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

    @ElementCollection(targetClass = UUID.class)
    @CollectionTable(name = "ballot_selections", joinColumns = @JoinColumn(name = "ballot_id"))
    @Column(name = "choice_id", nullable = false)
    private List<UUID> selections;

    public Ballot(UUID id, UUID userId, UUID eventId, int version, BallotState state, LocalDateTime createdAt, List<UUID> selections){
        this.id = id;
        this.userId = userId;
        this.eventId = eventId;
        this.version = version;
        this.state = state;
        this.createdAt = createdAt;
        this.selections = selections;
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

    public List<UUID> getSelections() {
        return selections;
    }

    public void setSelections(List<UUID> selections) {
        this.selections = selections;
    }

}
