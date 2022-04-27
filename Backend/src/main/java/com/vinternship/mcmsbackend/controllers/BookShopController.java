package com.vinternship.mcmsbackend.controllers;

import com.vinternship.mcmsbackend.models.BookShop;

import com.vinternship.mcmsbackend.repositories.BookShopRepository;
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
public class BookShopController {
    @Autowired
    BookShopRepository bookShopRepository;

    @GetMapping("/bookshops")
    public ResponseEntity<List<BookShop>> getAllBookShops(@RequestParam(required = false) String name) {
        try {
            List<BookShop> bookShops = new ArrayList<BookShop>();

            if (name == null) {
                bookShopRepository.findAll().forEach(bookShops::add);
            } else {
                bookShopRepository.findBookShopByNameContaining(name).forEach(bookShops::add);
            }

            if (bookShops.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(bookShops, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/bookshops/{id}")
    public ResponseEntity<BookShop> getBookShopById(@PathVariable("id") String id) {
        Optional<BookShop> bookshopData = bookShopRepository.findById(id);

        if (bookshopData.isPresent()) {
            return new ResponseEntity<>(bookshopData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/bookshops")
    public ResponseEntity<BookShop> createBookShop(@RequestBody BookShop bookshop) {
        try {
            BookShop _b = bookShopRepository.save(new BookShop(

                    bookshop.getName(),
                    bookshop.getNumber(),
                    bookshop.getLocation(),
                    bookshop.getBooks(),
                    bookshop.getContact_no(),
                    bookshop.getEmail()

            ));

            return new ResponseEntity<>(_b, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/bookshops/{id}")
    public ResponseEntity<BookShop> updateBook(@PathVariable("id") String id, @RequestBody BookShop bookShop) {
        Optional<BookShop> BookShopData = bookShopRepository.findById(id);

        if (BookShopData.isPresent()) {
            BookShop _b1 = BookShopData.get();

            _b1.setName(bookShop.getName());
            _b1.setNumber(bookShop.getNumber());
            _b1.setLocation(bookShop.getLocation());
            _b1.setBooks(bookShop.getBooks());
            _b1.setContact_no(bookShop.getContact_no());
            _b1.setEmail(bookShop.getEmail());


            return new ResponseEntity<>(bookShopRepository.save(_b1), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/bookshops/{id}")
    public ResponseEntity<HttpStatus> deleteBookShop(@PathVariable("id") String id) {
        try {
            bookShopRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/bookshops")
    public ResponseEntity<HttpStatus> deleteAllBookShop() {
        try {
            bookShopRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/bookshops/name/{name}")
    public ResponseEntity<List<BookShop>> findBookShopByName(@PathVariable("name") String name) {
        try {
            List<BookShop> b3 = new ArrayList<BookShop>();
            bookShopRepository.findBookShopByNameContaining(name).forEach(b3::add);
            System.out.println(b3);

            if (b3.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(b3, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}