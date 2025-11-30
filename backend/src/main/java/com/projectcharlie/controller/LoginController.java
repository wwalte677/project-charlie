package com.projectcharlie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.projectcharlie.model.User;
import com.projectcharlie.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:4173"
})
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        try {
            User user = userRepository.findByUsername(loginRequest.getUsername());

            if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
                // Return user on success
                return ResponseEntity.ok(user);
            } else {
                // Return 401 if invalid credentials
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid username or password");
            }
        } catch (Exception e) {
            // Log any unexpected error
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body("Server error during login");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User newUser) {
        try {
            if (userRepository.findByUsername(newUser.getUsername()) != null) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                .body("Username already exists");
            }

            newUser.setRole("USER"); // assign default role
            userRepository.save(newUser);
            return ResponseEntity.ok("Registration successful!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body("Server error during registration");
        }
    }
}