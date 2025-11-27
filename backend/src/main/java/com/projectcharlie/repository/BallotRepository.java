package com.projectcharlie.repository; 

import com.projectcharlie.model.Ballot;
import com.projectcharlie.model.BallotState;
import java.util.UUID;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BallotRepository extends JpaRepository<Ballot, UUID> {
    Optional<Ballot> findByUserIdAndEventIdAndStatus(UUID userId, UUID eventId, BallotState status);
}