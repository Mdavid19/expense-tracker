package com.main.tracker.service;

import com.main.tracker.model.Client;
import com.main.tracker.model.Receipt;
import com.main.tracker.model.ReceiptType;
import com.main.tracker.model.repositories.ClientRepository;
import com.main.tracker.model.repositories.ReceiptRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
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

    //TODO refactor
    public Map<String,String> getTotalSomeOfReceiptsByType(Long clientId, int year){
        Client client = clientRepository.findClientById(clientId);
        Map<String,String> totalByType= new HashMap<>();

        String totalOfFood = receiptRepository.findReceiptsByClient_IdAndDate_YearAndReceiptType(client,year, ReceiptType.FOOD).stream().map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add).toString();

        String totalOfEntertainment = receiptRepository.findReceiptsByClient_IdAndDate_YearAndReceiptType(client,year, ReceiptType.ENTERTAINMENT).stream().map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add).toString();

        String totalOfTravelling = receiptRepository.findReceiptsByClient_IdAndDate_YearAndReceiptType(client,year, ReceiptType.TRAVELLING).stream().map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add).toString();

        String totalOfHealth = receiptRepository.findReceiptsByClient_IdAndDate_YearAndReceiptType(client,year, ReceiptType.HEALTH).stream().map(Receipt::getValue)
                .reduce(BigDecimal.ZERO,BigDecimal::add).toString();

        totalByType.put("food",totalOfFood);
        totalByType.put("entertainment",totalOfEntertainment);
        totalByType.put("travelling",totalOfTravelling);
        totalByType.put("health",totalOfHealth);


        return totalByType;
    }
}

