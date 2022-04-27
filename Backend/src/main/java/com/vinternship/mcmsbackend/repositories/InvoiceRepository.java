package com.vinternship.mcmsbackend.repositories;
import com.vinternship.mcmsbackend.models.Invoice;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    List<Invoice> findInvoiceById(String id);
    List<Invoice> findInvoiceByPrice(int price);
}

