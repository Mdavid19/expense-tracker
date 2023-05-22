package com.main.tracker.model.repositories;

import com.main.tracker.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Optional<Client>findUserByUsername(String username);
    Client findClientById(Long Id);
}
