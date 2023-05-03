package com.main.tracker.model.repositories;

import com.main.tracker.model.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt,Long> {


}
