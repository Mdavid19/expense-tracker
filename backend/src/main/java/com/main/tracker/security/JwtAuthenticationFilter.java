package com.main.tracker.security;

import com.main.tracker.security.service.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    public static final int BEGIN_INDEX = 7;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request,
                                    @NonNull HttpServletResponse response,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {

        //Get the authorization header from the request
        String header = request.getHeader("Authorization");
        String jwt;
        String userName;
        //Validate Header
        if(header == null || !header.startsWith("Bearer ") ){
            filterChain.doFilter(request,response);
            return;
        }

        //Get JWT from the header
        jwt = header.substring(BEGIN_INDEX);
        userName = jwtService.extractUserName(jwt);
        UserDetails userDetails = userDetailsService.loadUserByUsername(userName);

        //Validate JWT
        if(jwtService.isTokenValid(jwt,userDetails )){
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetailsService.loadUserByUsername(userName),
                    null,
                    userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
            filterChain.doFilter(request,response);
            return;
        }

        //Setting context holder
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetailsService.loadUserByUsername(userName),
                null,
                userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        filterChain.doFilter(request,response);


    }
}
