package com.vinternship.mcmsbackend.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Getter
@Setter
@ToString

@Document(collection = "Item")
public class Item {

    @Id
    private String id;
    private String itemname;
    private String itemprice;
    private String itemauthor;
    private String itemyear;
    private String itemlanguage;
    private String itempic;

}
