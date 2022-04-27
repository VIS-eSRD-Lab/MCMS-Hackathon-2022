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
    this.db_books = this.bookService.getAll();
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

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['invoices']);
  }

  cancelAdd() {
    this.router.navigate(['invoices']);
  }

  getbookss() {
    return this.invoiceForm.get('bookes') as FormArray;
  }


  addBooks() {
    this.invoiceForm.value.bookes.push(this.buildItem());

  }

  removeItems(i: number) {
    this.invoiceForm.value.bookes.removeAt(i);

  }

  private buildItem(): FormGroup {
    return this.fb.group({
      id: [''],
      title: [''],
      language: [''],
      country: [''],
      price: [''],
      customerid :[''],
      customercontact : [''],
      customeraddress  : ['']
    });
  }


}
