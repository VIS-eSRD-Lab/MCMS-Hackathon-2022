package com.vinternship.mcmsbackend.repositories;

import com.vinternship.mcmsbackend.models.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, String> {
    List<Book> findBooksByTitleContaining(String name);
}
