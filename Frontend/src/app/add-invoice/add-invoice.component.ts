import { Component, OnInit } from '@angular/core';
import {Author} from "../models/author";
import {Genre} from "../models/genre";
import {Book} from "../models/book";
import {BookServicesService} from "../services/book-services.service";
import {GenreService} from "../services/genre.service";
import {AuthorServicesService} from "../services/author-services.service";
import {InvoiceServicesService} from "../services/invoice-services.service";
import {Invoice} from "../models/Invoice";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  db_authors: any;
  selected_authors?: Author[];
  db_books: any;
selected_books?:Book[]



  submitted = false;


  invoice : Invoice= {
    user_id:'',
    address:'',
    contactno:'',
    book: [],
    amount_ofitems:0,
    item_list:'',
    price:0
  }



  constructor(private invoiceService: InvoiceServicesService,private authorService: AuthorServicesService,private  bookService:BookServicesService) { }

  ngOnInit(): void {


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

  saveInvoice(): void {
    const data = {

      user_id:this.invoice.user_id,
      address:this.invoice.address,
      contactno:this.invoice.contactno,
      book: this.invoice.book,
      amount_ofitems:this.invoice.amount_ofitems,
      item_list: this.invoice.item_list,
      price:this.invoice.price,
    };

    this.invoiceService.create(data)
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

  newInvoice():void {
    this.submitted = false;
    this.invoice = {
      user_id:'',
      address:'',
      contactno:'',
      book: [],
      amount_ofitems:0,
      item_list:'',
      price:0
    };
    this.selected_authors= [];
    this.selected_books=[];


  }

}
