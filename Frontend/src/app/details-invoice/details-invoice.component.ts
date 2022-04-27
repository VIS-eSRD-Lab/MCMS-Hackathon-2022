import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BookServicesService} from "../services/book-services.service";
import {Invoice} from "../models/Invoice";
import {InvoiceServicesService} from "../services/invoice-services.service";

@Component({
  selector: 'app-details-invoice',
  templateUrl: './details-invoice.component.html',
  styleUrls: ['./details-invoice.component.css']
})
export class DetailsInvoiceComponent implements OnInit {

  id?: string;
  invoice = new Invoice();


  constructor(private route: ActivatedRoute,
              private router:Router,
              private invoiceService: InvoiceServicesService) { }

  ngOnInit(){
    this.invoice = new Invoice();
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = params['id'.toString()];
        this.invoiceService.get(this.id)
          .subscribe({
            next:(data)=>{
              this.invoice = data;
              console.log(data);
            },
            error:(e)=>console.error(e)
          });
      }
    );
  }

  deleteInvoice(id: string){
    if(confirm("Delete Invoice?")){
      this.invoiceService.delete(id)
        .subscribe({
          next:(data)=>{
            this.invoice = data;
            console.log(data);
          },
          error:(e)=>console.error(e)
        });
      this.router.navigate(['/book-list']).then(()=>{

      });
    }
  }

  updateInvoice(id: string){
    this.router.navigate(['/update-book', id]).then(()=>{

    });
  }




}
