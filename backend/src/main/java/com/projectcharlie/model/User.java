package com.projectcharlie.model;

import java.util.UUID;
import jakarta.persistence.*;

@Entity
@Table(name = "users") // this creates a table named "users" in the database
public class User {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(unique = true, nullable = false) // @columns make the database columns not null but for username it is also unique
    private String username;

    @Column(nullable = false) // @columns make the database columns not null
    private String password;

    @Column(nullable = false)
    private String role; // "ADMIN" or "USER"

    public User() {

    }

    public User(String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    // Getters/setters
    public UUID getId() { 
        return id; 
    }

    public void setId(UUID id) { 
        this.id = id; 
    }

    public String getUsername() { 
        return username; 
    }

    public void setUsername(String username) { 
        this.username = username; 
    }

    public String getPassword() { 
        return password; 
    }
    public void setPassword(String password) {
        this.password = password; 
    }

    public String getRole() { 
        return role; 
    }
    public void setRole(String role) {
        this.role = role; 
    }

}
