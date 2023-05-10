package com.main.tracker.service;

import com.main.tracker.model.Receipt;
import com.main.tracker.model.repositories.ReceiptRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ReceiptService {
    private ReceiptRepository receiptRepository;

    public void saveReceipt(Receipt receipt){
        receiptRepository.save(receipt);

    }
}
