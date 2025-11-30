package com.projectcharlie.service;

import com.projectcharlie.model.User;
import com.projectcharlie.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // Marks this class as a Spring service component
public class UserService {
    
    @Autowired // keyword to auto-wire dependencies
    private UserRepository userRepo; 
    
    public List<User> getAllUsers() {
        // Method to retrieve all users
        return userRepo.findAll();
    }
}
