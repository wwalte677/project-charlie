package com.projectcharlie.service;

import com.projectcharlie.model.Ballot;
import com.projectcharlie.model.BallotState;
import com.projectcharlie.repository.BallotRepository;

import java.util.UUID;
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

@Service
public class BallotService {

    private final BallotRepository ballotRepository;

    public BallotService(BallotRepository ballotRepository){
        this.ballotRepository = ballotRepository;
    }
    
    public Optional<Ballot> getActiveBallot(UUID userId, UUID eventId, BallotState status) {
        return this.ballotRepository.findByUserIdAndEventIdAndStatus(
        userId,
        eventId,
        BallotState.ACTIVE
        );
    }
    
}
