import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {AuthorListComponent} from './components/author-list/author-list.component';
import {AddAuthorComponent} from './components/add-author/add-author.component';
import {AuthorDetailsComponent} from './components/author-details/author-details.component';
import {AuthorUpdateComponent} from './components/author-update/author-update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import {NgSelectModule} from "@ng-select/ng-select";
import { AddInvoiceComponent } from './components/Invoice/add-invoice/add-invoice.component';
import { InvoiceDetailsComponent } from './components/Invoice/invoice-details/invoice-details.component';
import { InvoiceListComponent } from './components/Invoice/invoice-list/invoice-list.component';
import { UpdateInvoiceComponent } from './components/Invoice/update-invoice/update-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthorListComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    AuthorUpdateComponent,
    AddInvoiceComponent,
    InvoiceDetailsComponent,
    InvoiceListComponent,
    UpdateInvoiceComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        DataTablesModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
