package com.projectcharlie.model;

import java.util.UUID;
import java.time.LocalDateTime;

public class Confirmation {
    
    private final UUID ballotId;
    private final int version;
    private final LocalDateTime timestamp;

    public Confirmation(UUID ballotId, int version, LocalDateTime timestamp) {
        this.ballotId = ballotId;
        this.version = version;
        this.timestamp = timestamp;
    }
    
    public UUID getBallotId() {
        return ballotId;
    }

    public int getVersion() {
        return version;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }
}
