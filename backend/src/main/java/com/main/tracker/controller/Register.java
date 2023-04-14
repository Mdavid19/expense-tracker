package com.main.tracker.controller;

import com.main.tracker.security.request.RegisterRequest;
import com.main.tracker.security.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/register")
public class Register {
    private final AuthenticationService service;

    @PostMapping
    public String register(@RequestBody RegisterRequest request){
        return service.register(request);
    }

}
