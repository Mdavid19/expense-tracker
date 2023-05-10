package com.main.tracker.controller.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ReceiptRequest {
    public Integer value;
    public String username;
}
