package com.projectcharlie.service;

import com.projectcharlie.model.Event;
import com.projectcharlie.model.EventState;
import com.projectcharlie.repository.EventRepository;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Optional<Event> getEvent(UUID eventId){
        return eventRepository.findById(eventId);
    }

    // Runs every 60 seconds
    @Scheduled(fixedRate = 60000) // checks to see if event time has expired
    public void closeExpiredEvents() {
        List<Event> events = eventRepository.findAll();
        LocalDateTime now = LocalDateTime.now();

        for (Event event : events) {
            if (event.getState() == EventState.ACTIVE &&
                event.getEndAt().isBefore(now)) {

                event.setState(EventState.CLOSED);
                eventRepository.save(event);
            }
        }
    }
}


