package com.projectcharlie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.boot.CommandLineRunner;
import com.projectcharlie.model.User;
import com.projectcharlie.repository.UserRepository;
@EnableScheduling
// Entry point for Spring Boot backend
@SpringBootApplication
public class ProjectCharlieApplication {
  public static void main(String[] args) {

    SpringApplication.run(ProjectCharlieApplication.class, args);

  }

  @Bean // Bean to initialize default admin user
  CommandLineRunner init(UserRepository userRepository) {

    return args -> {

      if (userRepository.findByUsername("admin") == null) {

        userRepository.save(new User("admin", "admin123", "ADMIN")); // Create default admin user if not present

      }
    };
  }
}