package com.vinternship.mcmsbackend.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
import java.util.List;
@Document(collection = "invoice")
public class Invoice {
    @Id
    private String id;
    private String user_id;
    private String price;
    private String contactno;
    private list <Book> book;
    private int item_list;
    private int amount_ofitems;

    public Invoice(String id, String user_id, String price, String contactno, list<Book> book, int item_list, int amount_ofitems) {
        this.id = id;
        this.user_id = user_id;
        this.price = price;
        this.contactno = contactno;
        this.book = book;
        this.item_list = item_list;
        this.amount_ofitems = amount_ofitems;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getContactno() {
        return contactno;
    }

    public void setContactno(String contactno) {
        this.contactno = contactno;
    }

    public list<Book> getBooks() {
        return book;
    }

    public void setBooks(list<Book> books) {
        this.book = books;
    }

    public int getItem_list() {
        return item_list;
    }

    public void setItem_list(int item_list) {
        this.item_list = item_list;
    }

    public int getAmount_ofitems() {
        return amount_ofitems;
    }

    public void setAmount_ofitems(int amount_ofitems) {
        this.amount_ofitems = amount_ofitems;
    }
}
