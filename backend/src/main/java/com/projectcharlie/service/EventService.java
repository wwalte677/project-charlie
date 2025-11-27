package com.projectcharlie.service;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.projectcharlie.model.Event;
import com.projectcharlie.model.EventState;
import com.projectcharlie.repository.EventRepository;

import java.util.UUID;
import java.util.Optional;
import java.time.LocalDateTime;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository){
        this.eventRepository = eventRepository;
    }

    public Optional<Event> getEvent(UUID eventID) {
        return eventRepository.findById(eventID);
    }

    public boolean isOpen(Event event){
        LocalDateTime now = LocalDateTime.now();
        boolean isActive = event.getState() == EventState.ACTIVE;
        boolean isAfterStart = now.isEqual(event.getStartAt()) || now.isAfter(event.getStartAt());
        boolean isBeforeEnd = now.isBefore(event.getEndAt());
        return isActive && isAfterStart && isBeforeEnd;
    }

}


