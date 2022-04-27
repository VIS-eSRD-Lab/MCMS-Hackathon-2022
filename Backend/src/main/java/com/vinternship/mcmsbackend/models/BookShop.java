package com.vinternship.mcmsbackend.models;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Year;
import java.util.Date;
import java.util.List;
public class BookShop {

    @Id
    private String id;
    private String name;
    private String number;
    private String location;
    private Book[] books;
    private int contact_no;
    private String email;

    @CreatedDate
    private Date date;

    public BookShop() {
    }

    public BookShop(String name, String number, String location, Book[] books, int contact_no, String email) {
        this.name = name;
        this.number = number;
        this.location = location;
        this.books = books;
        this.contact_no = contact_no;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Book[] getBooks() {
        return books;
    }

    public void setBooks(Book[] books) {
        this.books = books;
    }

    public int getContact_no() {
        return contact_no;
    }

    public void setContact_no(int contact_no) {
        this.contact_no = contact_no;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}