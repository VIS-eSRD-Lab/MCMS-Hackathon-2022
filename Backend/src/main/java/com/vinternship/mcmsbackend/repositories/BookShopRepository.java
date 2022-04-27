package com.vinternship.mcmsbackend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vinternship.mcmsbackend.models.BookShop;


import java.util.List;

public interface BookShopRepository extends MongoRepository<BookShop, String> {

    List<BookShop> findBookShopByNameContaining(String name);
}