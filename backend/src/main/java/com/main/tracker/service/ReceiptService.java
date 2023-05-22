package com.main.tracker.service;

import com.main.tracker.model.Client;
import com.main.tracker.model.Receipt;
import com.main.tracker.model.repositories.ClientRepository;
import com.main.tracker.model.repositories.ReceiptRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Set;

@Service
@AllArgsConstructor
public class ReceiptService {
    private ReceiptRepository receiptRepository;
    private ClientRepository clientRepository;

    public void saveReceipt(Receipt receipt){
        receiptRepository.save(receipt);

    }

    public BigDecimal getReceiptByUserByMonth(Long clientId, int year, int month){
        Client client = clientRepository.findClientById(clientId);
        Set<Receipt> receipts =  receiptRepository.findReceiptsByClient_IdAndDate_Month(client,month, year);

        return receipts.stream().map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add);
    }

    public BigDecimal getReceiptByUserByMonthByDay(Long clientId, int month, int day, int year){
        Client client = clientRepository.findClientById(clientId);
        Set<Receipt> receipts = receiptRepository.findReceiptsByClient_IdAndDate_MonthAndDate_DayOfMonth(client,month,day, year);

        return receipts.stream()
                .map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add);
    }

    public BigDecimal getReceiptByUserByYear(Long clientId, int year){
        Client client = clientRepository.findClientById(clientId);
        Set<Receipt> receipts = receiptRepository.findReceiptsByClient_IdAndDate_Year(client,year);

        return receipts.stream()
                .map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add);
    }
}

