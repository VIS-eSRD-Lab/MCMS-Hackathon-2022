import { Component, OnInit ,Input} from '@angular/core';
import {Book} from "../../../models/Book";
import {
  BookServiceService
} from "../../../services/book-service.service";
import {
    InvoiceServiceService
} from "../../../services/invoice-service.service";
import {Invoice} from "../../../models/invoice";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books?: Book[];
  currentAuthor: Book = {};
  currentIndex = -1;
  name = '';

  abook?: Book;

  selectedBook: Book[] = [];



    invoice = {
        id: '',
        userId: '',
        books: this.selectedBook,
        quantity: 0,
        salePrice: 0
    }




  dtOptions: DataTables.Settings = {};

  constructor(private bookService: BookServiceService , private invoiceService:InvoiceServiceService) { }

  ngOnInit(): void {
      this.getAllBooks();
      this.dtOptions = {
          processing: true,
          paging: true,
          pageLength: 5,
          responsive: true,
      };
  }

  getAllBooks(): void {
    this.bookService.getAll()
        .subscribe({
          next: (data) => {
            this.books = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
  }

  searchBookByTitle(): void {
    this.currentAuthor = {};
    this.currentIndex = -1;

    console.log(this.name);

    this.bookService.findByTitle(this.name)
        .subscribe({
          next: (data) => {
            this.books = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
  }

    addTOInvoice(id:any) {

        this.bookService.get(id)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.abook = data;

                    this.selectedBook.push(data);

                    for( let i = 0; i < this.selectedBook.length; i++){
                        // @ts-ignore
                        this.invoice.salePrice += Number(this.selectedBook[i]!.price);
                    }
                    console.log(this.selectedBook);
                },

                error: (e) => console.error(e)
            });

        const data ={
            books : this.selectedBook,



        }



        this.invoiceService.create(data).subscribe(
            data => {
                console.log(data);
            },
            error => console.log(error));


    }



    removeBook(id: any){
        this.selectedBook.splice(id,1);
        console.log(this.selectedBook);
        console.log(id);
    }

}
