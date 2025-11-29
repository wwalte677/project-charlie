package com.projectcharlie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projectcharlie.model.User;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    User findByUsername(String username);
}