package com.vinternship.mcmsbackend.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
public class Book {
    @Id
    private String id;
    private String title;
    private String language;
    private int year;
    private int pages;
    private String author;
    private String country;
    private String link;
    private String imageLink;
    private int price;

    // Empty constructor
    public Book() {
    }

    // Constructor
    public Book(String title, String language, int year, int pages, String author,
                String country, String link, String imageLink, int price) {
        this.title = title;
        this.language = language;
        this.year = year;
        this.pages = pages;
        this.author = author;
        this.country = country;
        this.link = link;
        this.imageLink = imageLink;
        this.price = price;

    }

    // Getters & setters
    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    // To string method
    @Override
    public String toString() {
        return "Book{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", language='" + language + '\'' +
                ", year=" + year +
                ", pages=" + pages +
                ", author='" + author + '\'' +
                ", country='" + country + '\'' +
                ", link='" + link + '\'' +
                ", imageLink='" + imageLink + '\'' +
                '}';
    }
}