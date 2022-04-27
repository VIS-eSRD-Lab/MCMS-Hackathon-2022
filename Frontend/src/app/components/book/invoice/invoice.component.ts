import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

import jsPDF from 'jspdf';
// @ts-ignore
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import {
  InvoiceServiceService
} from "../../../services/invoice-service.service";

import {ActivatedRoute, Params, Router} from "@angular/router";
import {Invoice} from "../../../models/invoice";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  @ViewChild('pdfTable') pdfTable: ElementRef | undefined;

  id?: string;

  invoice = new Invoice();

  constructor(private invoiceService:InvoiceServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = params['id'.toString()];
          this.invoiceService.get(this.id)
              .subscribe({
                next: (data) => {
                  this.invoice = data;
                  console.log(data);
                },
                error: (e) => console.error(e)
              });
        }
    );
  }

  //PDF genrate button click function
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    // @ts-ignore
    const pdfTable = this.pdfTable.nativeElement;
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();




  }

  // getInvoiceById(id):void{
  //   this.invoiceService.get(id).subscribe(invoice=>{
  //     this.invoice=invoice;
  //   });
  // }





}
