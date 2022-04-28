package com.vinternship.mcmsbackend.repositories;

import com.vinternship.mcmsbackend.models.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, String> {

}
