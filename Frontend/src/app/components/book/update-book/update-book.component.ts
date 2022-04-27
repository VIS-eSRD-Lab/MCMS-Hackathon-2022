import { Component, OnInit } from '@angular/core';
import {Book} from "../../../models/book";
import {BookServicesService} from "../../../services/book-services.service";
import {ActivatedRoute, Params} from "@angular/router";
import {GenreService} from "../../../services/genre.service";
import {param} from "jquery";
import {AuthorServicesService} from "../../../services/author-services.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  selected_genres:any;
  genres:any;

  authors:any;
  selected_authors:any;

  id?:string;
  book = new Book();
  submitted = false;

  constructor(private bookService: BookServicesService,
              private route:ActivatedRoute,
              private genreService: GenreService,
              private authorService: AuthorServicesService) { }

  ngOnInit(): void {
    this.book = new Book();

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()]
        this.bookService.get(this.id)
          .subscribe({
            next: (data: Book) => {
              this.book = data;
              this.selected_genres = this.book.genre;
              this.selected_authors = this.book.author;
            },
            error: (e) => console.error(e)

          });


      }
    );

    this.genreService.getAll()
      .subscribe({
        next: (data) => {
          this.genres = data;
          // this.dbGenres.forEach((g) =>{
          //   console.log(g)
          //   this.genres.push({id:g.id, name:g.name});
          // })
        },
        error: (e) => console.error(e)
      });

    this.authorService.getAll()
      .subscribe(
        {
          next: (data) => {
            this.authors = data;
          },
          error: (e) => console.error(e)
        });
  }





  updateBook():void{
    if(confirm('update this book?')){
      const data = {
        title : this.book.title,
        price: this.book.price,
        year_of_publication: this.book.year_of_publication,
        author: this.book.author,
        genre: this.selected_genres,
        publisher: this.book.publisher,

      }

      this.bookService.update(this.id, data)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }

  }

}
