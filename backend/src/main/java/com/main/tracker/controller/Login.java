package com.main.tracker.controller;

import com.main.tracker.model.Client;
import com.main.tracker.security.request.AuthenticationRequest;
import com.main.tracker.security.response.AuthResponse;
import com.main.tracker.security.service.AuthenticationService;
import com.main.tracker.security.service.JwtService;
import com.main.tracker.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping()
@AllArgsConstructor
public class Login {

    private final AuthenticationService service;
    private final JwtService jwtService;
    private final ClientService clientService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authResponse(@RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(service.authenticate(request));
    }

    @GetMapping("/api/get-me")
    public Client getMe(@RequestHeader(HttpHeaders.AUTHORIZATION) String header){
        String token = header.substring(7);
        String username = jwtService.extractUserName(token);
        return clientService.getClient(username);
    }
}
