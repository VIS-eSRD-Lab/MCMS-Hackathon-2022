import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookServicesService} from "../services/book-services.service";
import {ActivatedRoute, Params} from "@angular/router";
import {GenreService} from "../services/genre.service";
import {AuthorServicesService} from "../services/author-services.service";
import {Invoice} from "../models/Invoice";
import {InvoiceServicesService} from "../services/invoice-services.service";

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {



  authors:any;
  selected_book:any;
  db_books:any;

  id?:string;
  invoice = new Invoice();
  submitted = false;

  constructor(private invoiceService: InvoiceServicesService,
              private route:ActivatedRoute,
              private bookservice:BookServicesService,
              private authorService: AuthorServicesService) { }

  ngOnInit(): void {
    this.invoice = new Book();

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'.toString()]
        this.invoiceService.get(this.id)
          .subscribe({
            next: (data: Invoice) => {
              this.invoice = data;
              this.selected_book= this.invoice.book;
            },
            error: (e) => console.error(e)

          });


      }
    );



    this.bookservice.getAll()
      .subscribe(
        {
          next: (data) => {
            this.authors = data;
          },
          error: (e) => console.error(e)
        });
  }





  updateInvoice():void{
    if(confirm('update this book?')){
      const data = {
        user_id:this.invoice.user_id,
        address:this.invoice.address,
        contactno:this.invoice.contactno,
        book: this.invoice.book,
        amount_ofitems:this.invoice.amount_ofitems,
        item_list: this.invoice.item_list,
        price:this.invoice.price,


      }

      this.invoiceService.update(this.id, data)
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
