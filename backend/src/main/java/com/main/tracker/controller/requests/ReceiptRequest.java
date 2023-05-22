package com.main.tracker.controller.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
public class ReceiptRequest {
    public Integer value;
    public String username;
    LocalDate date;
}
