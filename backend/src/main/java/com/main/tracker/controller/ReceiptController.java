package com.main.tracker.controller;

import com.main.tracker.controller.requests.ReceiptRequest;
import com.main.tracker.model.Receipt;
import com.main.tracker.service.ClientService;
import com.main.tracker.service.ReceiptService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@RestController
@RequestMapping("/api/receipt")
@AllArgsConstructor
public class ReceiptController {


    ReceiptService receiptService;
    ClientService clientService;

    @PostMapping("/add")
    public void saveReceipt(@RequestBody ReceiptRequest request){
        Receipt receipt = Receipt.builder()
                .value(BigDecimal.valueOf(request.getValue()))
                .date(LocalDate.now())
                .client(clientService.getClient(request.getUsername()))
                .build();

        receiptService.saveReceipt(receipt);
    }

    @GetMapping
    public String fuckyou(){
        return "Fuck you you fucking bitch";
    }
}
