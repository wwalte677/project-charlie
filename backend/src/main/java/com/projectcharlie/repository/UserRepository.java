package com.projectcharlie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projectcharlie.model.User;
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}