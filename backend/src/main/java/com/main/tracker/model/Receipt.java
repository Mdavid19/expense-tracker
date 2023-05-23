package com.main.tracker.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Receipt {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private BigDecimal value;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private ReceiptType receiptType;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;


}
