package com.projectcharlie.repository;

import com.projectcharlie.model.Choice;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface ChoiceRepository extends JpaRepository<Choice, UUID> {
    
}
