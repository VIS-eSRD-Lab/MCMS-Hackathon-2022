package com.vinternship.mcmsbackend.controllers;

import com.vinternship.mcmsbackend.models.Author;
import com.vinternship.mcmsbackend.models.Invoice;
import com.vinternship.mcmsbackend.repositories.AuthorRepository;
import com.vinternship.mcmsbackend.repositories.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class InvoiceController {
    @Autowired
    InvoiceRepository invoiceRepository;
    
    @GetMapping("/invoice")
    public ResponseEntity<List<Author>> getAllInvoices(@RequestParam(required = false) String name) {
        try {
            List<Author> authors = new ArrayList<Author>();

            if (name == null) {
                invoiceRepository.findAll().forEach(authors::add);
            } else {
                invoiceRepository.findInvoiceById(name).forEach(authors::add);
            }

            if (authors.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(authors, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/invoice/{id}")
    public ResponseEntity<Invoice> getInvoiceById(@PathVariable("id") String id) {
        Optional<Invoice> invoiceData = invoiceRepository.findById(id);

        if (invoiceData.isPresent()) {
            return new ResponseEntity<>(invoiceData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/invoice")
    public ResponseEntity<Author> createInvoice(@RequestBody Invoice invoice) {
        try {
            Invoice _invoice = invoiceRepository.save(new Invoice(
                    invoice.getId(),
                    invoice.getUser_id(),
                    invoice.getPrice(),
                    invoice.getItem_list(),
                    invoice.getAmount_ofitems()

            ));
            return new ResponseEntity<>(_invoice, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/invoice/{id}")
    public ResponseEntity<Invoice> updateInvoice(@PathVariable("id") String id, @RequestBody Invoice invoice) {
        Optional<Invoice> invoiceData = invoiceRepository.findById(id);

        if (invoiceData.isPresent()) {
            Invoice _invoice = invoiceData.get();
            _invoice.setUser_id(invoice.getUser_id());
            _invoice.setPrice(invoice.getPrice());
            _invoice.setItem_list(invoice.getItem_list());
            _invoice.setAmount_ofitems(invoice.getAmount_ofitems());

            return new ResponseEntity<>(invoiceRepository.save(_invoice), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/invoice/{id}")
    public ResponseEntity<HttpStatus> deleteInvoice(@PathVariable("id") String id) {
        try {
            invoiceRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/invoice")
    public ResponseEntity<HttpStatus> deleteAllInvoices() {
        try {
            invoiceRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/invoice/price/{price}")
    public ResponseEntity<List<Invoice>> findByInvoicePrice(@PathVariable("price") Integer price) {
        try {
            List<Invoice> invoices = invoiceRepository.findInvoiceByPrice(price);

            if (invoices.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(invoices, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
