package com.projectcharlie.service;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class AuditService {

    private static final Logger logger = LoggerFactory.getLogger(AuditService.class);

    public AuditService(){}

    public void log(String action, String resource, String correlationId){
        logger.info("[AUDIT_TRAIL] ACTION:{} | RESOURCE_ID:{} | CORRELATION_ID:{}", action, resource, correlationId);
    }
    
}
