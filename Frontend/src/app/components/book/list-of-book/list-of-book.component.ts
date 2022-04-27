import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {BookServicesService} from "../../../services/book-services.service";

@Component({
  selector: 'app-list-of-book',
  templateUrl: './list-of-book.component.html',
  styleUrls: ['./list-of-book.component.css']
})
export class ListOfBookComponent implements OnInit {

  books?:Book[];
  currentBook?:Book={};
  currentIndex = -1
  name = ''

  dtOptions: DataTables.Settings = {};


  constructor(private bookService : BookServicesService) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.dtOptions ={
      processing: true,
      paging : true,
      pageLength: 5,
      responsive: true,
    };
  }

  getAllBooks():void {
    this.bookService.getAll()
      .subscribe({
        next:(data)=>{
          this.books = data;
          console.log(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

  refreshList(): void {
    this.getAllBooks();
    this.currentBook = {};
    this.currentIndex = -1;
  }

  removeAllBooks(): void {
    if(confirm('Are you sure to delete all books ?')) {
      this.bookService.deleteAll()
        .subscribe({
          next: data => {
            console.log(data);
            this.refreshList();
          },
          error: error => {
            console.log(error);
          }
        });
    }
  }

  searchBookByName(): void {
    this.currentBook = {};
    this.currentIndex = -1;

    this.bookService.findByTitle(this.name)
      .subscribe({
        next: data => {
          this.books = data;
          console.log(data);
        },
        error: error => {
          console.log(error);
        }
      });
  }

}
