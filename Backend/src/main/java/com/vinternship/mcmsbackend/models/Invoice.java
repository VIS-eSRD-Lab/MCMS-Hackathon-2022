package com.vinternship.mcmsbackend.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Document(collection = "invoice")
public class Invoice {

    @Id
    private String id;
    @Id
    private String userid;
    private Book[] item;
    private Integer quantity;
    private Integer salesprice;

    @CreatedDate
    private Date date;
}
