import { Component, OnInit } from '@angular/core';

import {BookShop} from "../../../models/bookShop";

import {BookShopServicesService} from "../../../services/book-shop-services.service";
import {Book} from "../../../models/book";
import {BookServicesService} from "../../../services/book-services.service";

@Component({
  selector: 'app-add-book-shop',
  templateUrl: './add-book-shop.component.html',
  styleUrls: ['./add-book-shop.component.css']
})
export class AddBookShopComponent implements OnInit {
  db_books:any;
  selected_books?:Book[];

  bookShop: BookShop = {
    title: '',
    name: '',
    number: 0,
    location: '',
    books: [],
    contact_no: 0,
    email: '',

  }

  submitted = false;

  constructor(private bookShopService: BookShopServicesService, private bookService: BookServicesService) { }
  ngOnInit(): void {
    this.bookService.getAll()
      .subscribe({
        next:(data)=>{
          this.db_books= data;
          console.log(data)
        },
        error:(err)=>{
          console.log(err)
        }
      })

  }

  saveBookShop(): void {
    const data = {
      title: this.bookShop.title,
      name: this.bookShop.name,
      number: this.bookShop.number,
      location: this.bookShop.location,
      book: this.selected_books,
      contact_no: this.bookShop.contact_no,
      email: this.bookShop.email,
    };

    this.bookShopService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
    }

    newBookShop():void {
      this.submitted = false;
      this.bookShop = {
        title: '',
        name: '',
        number: 0,
        location: '',
        books: [],
        contact_no: 0,
        email: '',

      };
    }

  }






