package com.projectcharlie.controller;

import org.springframework.web.bind.annotation.*;
import com.projectcharlie.model.Ballot;
import com.projectcharlie.model.Confirmation;
import com.projectcharlie.model.Event;
import com.projectcharlie.service.AuditService;
import com.projectcharlie.service.BallotService;
import com.projectcharlie.service.EventService;
import java.util.UUID;
import java.util.List;
import java.time.LocalDateTime;

@RestController
public class VoteController {
    private final EventService eventService;
    private final BallotService ballotService;
    private final AuditService auditService;

    public VoteController(EventService eventService, BallotService ballotService, AuditService auditService) {
        this.eventService = eventService;
        this.ballotService = ballotService;
        this.auditService = auditService;
    }
}
