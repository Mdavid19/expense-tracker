package com.main.tracker.model.repositories;

import com.main.tracker.model.Client;
import com.main.tracker.model.Receipt;
import com.main.tracker.model.ReceiptType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface ReceiptRepository extends JpaRepository<Receipt,Long> {
    @Query("SELECT r FROM Receipt r WHERE YEAR(r.date)=:year AND MONTH(r.date)=:month AND (r.client)=:client")
    Set<Receipt> findReceiptsByClient_IdAndDate_Month(Client client, int month, int year);

    @Query("SELECT r FROM Receipt r WHERE YEAR(r.date)=:year AND MONTH(r.date)=:month AND DAY(r.date)=:day AND(r.client)=:client")
    Set<Receipt> findReceiptsByClient_IdAndDate_MonthAndDate_DayOfMonth(Client client, int month, int day, int year);

    @Query("SELECT r FROM Receipt r WHERE YEAR(r.date)=:year AND(r.client)=:client")
    Set<Receipt> findReceiptsByClient_IdAndDate_Year(Client client, int year);

    @Query("SELECT r FROM Receipt r WHERE YEAR(r.date)=:year AND (r.client)=:client AND (r.receiptType)=:type")
    Set<Receipt> findReceiptsByClient_IdAndDate_YearAndReceiptType(Client client, int year, ReceiptType type);

}
