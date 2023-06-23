package com.main.tracker.service;

import com.main.tracker.model.Client;
import com.main.tracker.model.repositories.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ClientService {
    private final ClientRepository clientRepository;

    public Client getClient(String username){
        return clientRepository.findUserByUsername(username).orElse(null);
    }

    public void changeCurrency(String username, String currency){
        Client client = getClient(username);
        client.setCurrency(currency);
        clientRepository.save(client);
    }




}
