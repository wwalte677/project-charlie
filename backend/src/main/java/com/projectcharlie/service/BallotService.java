package com.projectcharlie.service;

import com.projectcharlie.model.Ballot;
import com.projectcharlie.model.BallotState;
import com.projectcharlie.model.User;

import com.projectcharlie.repository.BallotRepository;
import com.projectcharlie.repository.UserRepository;

import java.util.UUID;
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

@Service // Marks this class as a Spring service component
public class BallotService {

    @Autowired // keyword to auto-wire dependencies
    private final BallotRepository ballotRepository;
    private final UserRepository userRepository;

    public BallotService(BallotRepository ballotRepository, UserRepository userRepository){

        this.ballotRepository = ballotRepository;
        this.userRepository = userRepository;
    }
    
    public Optional<Ballot> getActiveBallot(UUID userId, UUID eventId, BallotState state) {

        return this.ballotRepository.findByUser_IdAndEventIdAndState(
            userId,
            eventId,
            state
        );
    }
    
    @Transactional
    public Ballot insertActiveBallot(UUID userId, UUID eventId, List<UUID> selection, Optional<Ballot> previousBallot) {

        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("User not found for ballot creation.")); // Find the user by ID or throw an exception if not found

        int newVersion = 1;
        
        if(previousBallot.isPresent()){

            newVersion = previousBallot.get().getVersion() + 1; // Increment version if previous ballot exists
        }

        Ballot newBallot = new Ballot(

            UUID.randomUUID(), 
            user, 
            eventId, 
            newVersion, 
            BallotState.ACTIVE, 
            LocalDateTime.now(),
            selection
        );

        return ballotRepository.save(newBallot);
    }

    @Transactional // Ensure the operation is executed within a transaction
    public void supersedePreviousBallot(UUID ballotId){

        Optional<Ballot> optionalBallot = ballotRepository.findById(ballotId);

        if(optionalBallot.isPresent()){
            Ballot previousBallot = optionalBallot.get();
            previousBallot.setState(BallotState.SUPERSEDED);
            ballotRepository.save(previousBallot);
        }

    }
    
}
