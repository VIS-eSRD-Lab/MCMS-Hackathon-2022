import { Component, OnInit } from '@angular/core';
import {Book } from "../../../models/book"
import {BookServicesService} from "../../../services/book-services.service";
import {Genre} from "../../../models/genre"
import {GenreService} from "../../../services/genre.service";
import {Author} from "../../../models/author";
import {AuthorServicesService} from "../../../services/author-services.service";
import {error} from "jquery";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  db_authors: any;
  selected_authors?: Author[];

  db_genres: any

  selected_genres?: Genre[];

  submitted = false;


  book : Book = {
    title : '',
    price: 0,
    author:[],
    genre:[],
    publisher:'',
    year_of_publication:0

  }



  constructor(private bookService: BookServicesService, private genreService: GenreService,private authorService: AuthorServicesService) { }

  ngOnInit(): void {
    this.genreService.getAll()
      .subscribe(
        {
        next:(data)=>{
          this.db_genres = data;
        },
        error:(err)=>{
          console.log(err);
        }
      });

    this.authorService.getAll()
      .subscribe(
        {
          next:(data)=>{
            this.db_authors = data;
          },
          error:(err)=>{
            console.log(err);
          }
        }
      );

  }

  saveBook(): void {
    const data = {
      title : this.book.title,
      price: this.book.price,
      author:this.selected_authors,
      genre:this.selected_genres,
      publisher:this.book.publisher,
      year_of_publication:this.book.year_of_publication,
    };

    this.bookService.create(data)
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

    newBook():void {
      this.submitted = false;
      this.book = {
        title : '',
        price: 0,
        author:[],
        genre:[],
        publisher:'',
        year_of_publication:0
  };
      this.selected_authors= [];
      this.selected_genres= [];


}

}
