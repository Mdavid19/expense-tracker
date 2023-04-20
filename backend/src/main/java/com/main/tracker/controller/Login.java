package com.main.tracker.controller;

import com.main.tracker.security.request.AuthenticationRequest;
import com.main.tracker.security.response.AuthResponse;
import com.main.tracker.security.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
@AllArgsConstructor
public class Login {

    private final AuthenticationService service;

    @PostMapping
    public ResponseEntity<AuthResponse> authResponse(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }

}
