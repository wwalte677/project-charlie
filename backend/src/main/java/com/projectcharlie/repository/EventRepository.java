package com.projectcharlie.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projectcharlie.model.Event;

public interface EventRepository extends JpaRepository<Event, UUID> {
    
}

