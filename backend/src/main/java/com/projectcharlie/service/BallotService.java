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
    
    public Optional<Ballot> getActiveBallot(UUID userId, UUID eventId) {
        return this.ballotRepository.findByUserIdAndEventIdAndState(
            userId,
            eventId,
            BallotState.ACTIVE
        );
    }
    
    public Ballot insertActiveBallot(UUID userId, UUID eventId, List<UUID> selection) {
        Ballot newBallot = new Ballot(
            UUID.randomUUID(), 
            userId, eventId, 
            1, 
            BallotState.ACTIVE, 
            LocalDateTime.now()
        );
        return ballotRepository.save(newBallot);
    }

    public void supersedePreviousBallot(UUID ballotId){
        Optional<Ballot> optionalBallot = ballotRepository.findById(ballotId);

        if(optionalBallot.isPresent()){
            Ballot previousBallot = optionalBallot.get();
            previousBallot.setState(BallotState.SUPERSEDED);
            ballotRepository.save(previousBallot);
        }
    }
    
}
