package com.main.tracker.security.service;

import com.main.tracker.model.Client;
import com.main.tracker.model.Role;
import com.main.tracker.model.repositories.ClientRepository;
import com.main.tracker.security.request.AuthenticationRequest;
import com.main.tracker.security.request.RegisterRequest;
import com.main.tracker.security.response.AuthResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final ClientRepository clientRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public String register(RegisterRequest request){
        var user = Client.builder()
                .fullName(request.getFullName())
                .username(request.getUserName())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        clientRepository.save(user);
        return "registration successful";
    }

    public AuthResponse authenticate(AuthenticationRequest authRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(),authRequest.getPassword()));
        UserDetails userDetails = clientRepository.findUserByUsername(authRequest.getUserName())
                .orElseThrow(()-> new UsernameNotFoundException("No such a username"));

        var jwtToken = jwtService.generateToken(userDetails);

        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

}
