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
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DataTablesModule} from "angular-datatables";
import {NgSelectModule} from "@ng-select/ng-select";
import { BookListComponent } from './components/book/book-list/book-list.component';
import {InvoiceComponent} from "./components/book/invoice/invoice.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthorListComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    AuthorUpdateComponent,
    BookListComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
