package com.main.tracker.controller;

import com.main.tracker.security.service.JwtService;
import com.main.tracker.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserApi {

    private final JwtService jwtService;
    private final ClientService clientService;

    @PostMapping("/change-currency")
    public void changeCurrency(@RequestHeader(HttpHeaders.AUTHORIZATION) String header, @RequestBody String currency){
        String token = header.substring(7);
        String username = jwtService.extractUserName(token);
        clientService.changeCurrency(username,currency);

    }
}
