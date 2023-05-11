package com.main.tracker.service;

import com.main.tracker.model.Client;
import com.main.tracker.model.Receipt;
import com.main.tracker.model.repositories.ClientRepository;
import com.main.tracker.model.repositories.ReceiptRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Set;

@Service
@AllArgsConstructor
public class ReceiptService {
    private ReceiptRepository receiptRepository;
    private ClientRepository clientRepository;

    public void saveReceipt(Receipt receipt){
        receiptRepository.save(receipt);

    }

    public BigDecimal getReceiptByUser(Long clientId, int month){
        Client client = clientRepository.findClientById(clientId);
        Set<Receipt> receipts =  receiptRepository.findReceiptsByClient_IdAndDate_Month(client,month);

        return receipts.stream().map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add);
    }
}

