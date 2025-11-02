package com.projectcharlie.controller;

import org.springframework.web.bind.annotation.*;
import java.sql.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")

class LoginRequest {
    private String username ;
    private String password ;

    // Getters and setters
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
}

public class LoginController {

    private static final String URL = "jdbc:mysql://localhost:3306/";
    private static final String DB_NAME = "my_app_db";
    private static final String USER = "myuser";
    private static final String PASSWORD = "mypassword";

    public LoginController() {
        // Initialize database and table on startup
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement()) {

            // Create database if it doesn't exist
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS " + DB_NAME);

            // Connect to the database
            try (Connection dbConn = DriverManager.getConnection(URL + DB_NAME, USER, PASSWORD);
                 Statement dbStmt = dbConn.createStatement()) {

                // Create users table if it doesn't exist
                dbStmt.executeUpdate(
                    "CREATE TABLE IF NOT EXISTS users (" +
                    "id INT AUTO_INCREMENT PRIMARY KEY," +
                    "username VARCHAR(50) UNIQUE NOT NULL," +
                    "password VARCHAR(50) NOT NULL)"
                );

                // Insert a default admin user if table is empty
                ResultSet rs = dbStmt.executeQuery("SELECT COUNT(*) AS count FROM users");
                if (rs.next() && rs.getInt("count") == 0) {
                    dbStmt.executeUpdate(
                        "INSERT INTO users (username, password) VALUES ('admin', '1234')"
                    );
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        try (Connection conn = DriverManager.getConnection(URL + DB_NAME, USER, PASSWORD)) {
            String sql = "SELECT password FROM users WHERE username = ?";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, username);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                String dbPassword = rs.getString("password");
                if (dbPassword.equals(password)) {
                    return "Login successful!";
                } else {
                    return "Incorrect password";
                }
            } else {
                return "User not found";
            }

        } catch (SQLException e) {
            e.printStackTrace();
            return "Database error";
        }
    }
    @PostMapping("/register")
    public String register(@RequestBody LoginRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        try (Connection conn = DriverManager.getConnection(URL + DB_NAME, USER, PASSWORD)) {
            // Check if username exists
            String checkSql = "SELECT username FROM users WHERE username = ?";
            PreparedStatement checkStmt = conn.prepareStatement(checkSql);
            checkStmt.setString(1, username);
            ResultSet rs = checkStmt.executeQuery();

            if (rs.next()) {
                return "Username already exists";
            }

            // Insert new user
            String insertSql = "INSERT INTO users (username, password) VALUES (?, ?)";
            PreparedStatement insertStmt = conn.prepareStatement(insertSql);
            insertStmt.setString(1, username);
            insertStmt.setString(2, password);
            insertStmt.executeUpdate();

            return "Registration successful!";
        } catch (SQLException e) {
            e.printStackTrace();
            return "Database error during registration";
        }
    }
}
