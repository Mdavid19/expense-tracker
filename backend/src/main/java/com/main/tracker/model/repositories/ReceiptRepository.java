package com.main.tracker.model.repositories;

import com.main.tracker.model.Client;
import com.main.tracker.model.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface ReceiptRepository extends JpaRepository<Receipt,Long> {
    @Query("SELECT r FROM Receipt r WHERE MONTH(r.date)=:month AND (r.client)=:client")
    Set<Receipt> findReceiptsByClient_IdAndDate_Month(Client client, int month);

}
