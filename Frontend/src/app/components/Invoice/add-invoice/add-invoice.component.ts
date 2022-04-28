import { Component, OnInit } from '@angular/core';
import {Invoice} from "../../../models/Invoice";
import {Book} from "../../../models/Book";
import {Observable} from "rxjs";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book.service";
import {InvoiceService} from "../../../services/invoice.service";
import {AuthorServicesService} from "../../../services/author-services.service";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  books?: Book[];
  currentBook: Book= {};
  currentIndex = -1;
  title = '';

  db_books : any

  selected_books?: Book[];

  invoice : Invoice = {
    customerid:'',
    customeraddress: '',
    customercontact: '',
    book: [],
    quantity: 0,
    salesprice: 0
  }

  submitted = false;

  // Build Report Form
  // invoiceForm = this.fb.group({
  //   bookid:'',
  //   customerid: '',
  //   customeraddress: '',
  //   customercontact: '',
  //   bookes: this.fb.array([this.buildItem()]),
  //   quantity: '',
  //   salesprice: '',
  //
  // });


  constructor(
              private authorService: AuthorServicesService,
              private invoiceService: InvoiceService,
              private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllBooks();

  }

  save() {
   // this.invoice = this.invoiceForm.value;
   // console.log(this.invoice);

    const data = {
      customerid: this.invoice.customerid,
      customeraddress: this.invoice.customeraddress,
      customercontact: this.invoice.customercontact,
      books:this.selected_books,
      quantity: this.invoice.quantity,
      salesprice: this.invoice.salesprice

    }
    this.invoiceService.create(data).subscribe({next:(res)=>{
        console.log(res)
        this.submitted= true;
      },
      error:(e)=> console.error(e)});
    this.router.navigate(['/add-semester']).then(() => {
    });
  }

  searchbookByName(): void {
    this.currentBook = {};
    this.currentIndex = -1;

    this.bookService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.books = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
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

  refreshList(): void {
    this.getAllBooks();
    this.currentBook = {};
    this.currentIndex = -1;
  }

  removeAllBooks(): void {
    if (confirm('Are you sure you want to delete all books')) {
      this.bookService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
        });
    }
  }





}
