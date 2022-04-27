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

@Document(collection = "Invoice")
public class Invoice {

    @Id
    private String id;
    private String customerid;
    private String customeraddress;
    private String customercontact;
    private List<Book[]> book;
    private Integer quantity;
    private Integer salesprice;

    public Invoice(String customerid, Integer quantity, Integer salesprice, List<Book[]> book) {

    }

    @Override
    public String toString() {
        return "Invoice{" +
                "id='" + id + '\'' +
                ", customerid='" + customerid + '\'' +
                ", book=" + book +
                ", quantity=" + quantity +
                ", salesprice=" + salesprice +
                '}';
    }
}