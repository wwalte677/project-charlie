package com.projectcharlie.repository; 

import com.projectcharlie.model.Ballot;
import com.projectcharlie.model.BallotState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
import java.util.Optional;
import java.util.List;

@Repository // This annotation indicates that the interface is a Spring Data repository
public interface BallotRepository extends JpaRepository<Ballot, UUID> {

    Optional<Ballot> findByUser_IdAndEventIdAndState(UUID userId, UUID eventId, BallotState state); // Find an active ballot for a specific user and event

    List<Ballot> findByEventId(UUID eventId); // Find all ballots for a specific event
}