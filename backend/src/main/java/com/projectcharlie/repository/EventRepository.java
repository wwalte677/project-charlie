package com.projectcharlie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projectcharlie.model.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
    
}
