package com.vinternship.mcmsbackend.controllers;

import com.vinternship.mcmsbackend.models.Book;
import com.vinternship.mcmsbackend.models.Item;
import com.vinternship.mcmsbackend.repositories.BookRepository;
import com.vinternship.mcmsbackend.repositories.ItemRepository;
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
public class ItemController {

        @Autowired
        ItemRepository repository;

        @GetMapping("/items")
        public ResponseEntity<List<Item>> getAllItems(@RequestParam(required = false) String name) {
            try {
                List<Item> items = new ArrayList<Item>();

                if (name == null) {
                    items.addAll(repository.findAll());
                } else {
                   // items.addAll(repository.findBooksByTitleContaining(name));
                }

                if (items.isEmpty()) {
                    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
                }

                return new ResponseEntity<>(items, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        @GetMapping("/items/{id}")
        public ResponseEntity<Item> getItemById(@PathVariable("id") String id) {
            Optional<Item> itemData = repository.findById(id);

            if (itemData.isPresent()) {
                return new ResponseEntity<>(itemData.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        }

        @PostMapping("/items")
        public ResponseEntity<Item> createItem(@RequestBody Item item) {
            try {
                    Item _item = repository.save(item);
                return new ResponseEntity<>(_item, HttpStatus.CREATED);
            } catch (Exception e) {
                return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    }
