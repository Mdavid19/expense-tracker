package com.main.tracker.controller;

import com.main.tracker.controller.requests.ReceiptRequest;
import com.main.tracker.model.Receipt;
import com.main.tracker.model.ReceiptType;
import com.main.tracker.service.ClientService;
import com.main.tracker.service.ReceiptService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Map;

@RestController
@RequestMapping("/api/receipt")
@AllArgsConstructor
public class ReceiptController {


    ReceiptService receiptService;
    ClientService clientService;


    // need to extend request with RECEIPT TYPE
    @PostMapping("/add")
    public void saveReceipt(@RequestBody ReceiptRequest request){
        Receipt receipt = Receipt.builder()
                .value(BigDecimal.valueOf(request.getValue()))
                .date(request.getDate())
                .receiptType(request.getReceiptType())
                .client(clientService.getClient(request.getUsername()))
                .build();

        receiptService.saveReceipt(receipt);
    }

    @GetMapping("/monthly")
    public String getReceiptsTotalValue(@RequestParam Long id ,@RequestParam int year, @RequestParam int month){
        return receiptService.getReceiptByUserByMonth(id,year,month).toString();
    }

    @GetMapping("/daily")
    public String getReceiptsTotalDailyValue(@RequestParam Long id, @RequestParam int month, @RequestParam int day, @RequestParam int year){
        return receiptService.getReceiptByUserByMonthByDay(id, month, day, year).toString();
    }

    @GetMapping("/yearly")
    public String getReceiptsTotalYearlyValue(@RequestParam Long id, @RequestParam int year){
        return receiptService.getReceiptByUserByYear(id, year).toString();
    }


    @GetMapping("/detailed")
    public Map<String,String> getReceiptsTotalByType(@RequestParam Long id, @RequestParam int year){
        return receiptService.getTotalSomeOfReceiptsByType(id,year);
    }
}
