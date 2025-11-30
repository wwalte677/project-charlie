package com.projectcharlie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projectcharlie.model.User;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> { // Repository interface for User entity
    User findByUsername(String username); // Method to find a user by their username
}