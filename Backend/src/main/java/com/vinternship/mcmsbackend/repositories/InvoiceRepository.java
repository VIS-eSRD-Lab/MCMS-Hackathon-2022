package com.vinternship.mcmsbackend.repositories;

import com.vinternship.mcmsbackend.models.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {

    Optional<Invoice> findInvoiceByUserid(String id);
}
