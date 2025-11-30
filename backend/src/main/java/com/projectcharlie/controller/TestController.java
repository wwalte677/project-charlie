package com.projectcharlie.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/")
    public String hello() {
        return "Backend is running!";
    }
}


// PURPOSE OF THIS FILE IS TO HAVE A SIMPLE ENDPOINT TO TEST IF THE BACKEND IS RUNNING