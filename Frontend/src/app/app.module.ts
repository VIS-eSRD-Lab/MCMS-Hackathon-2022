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
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { DeleteBookComponent } from './components/book/delete-book/delete-book.component';
import { ListOfBookComponent } from './components/book/list-of-book/list-of-book.component';
import { ListOfBookShopsComponent } from './components/bookShop/list-of-book-shops/list-of-book-shops.component';
import { AddBookShopComponent } from './components/bookShop/add-book-shop/add-book-shop.component';
import { UpdateBookShopComponent } from './components/bookShop/update-book-shop/update-book-shop.component';
import { DeleteBookShopComponent } from './components/bookShop/delete-book-shop/delete-book-shop.component';
import { AddMultipleBooksComponent } from './components/bookShop/add-multiple-books/add-multiple-books.component';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { BookshopDetailsComponent } from './components/bookshop/bookshop-details/bookshop-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthorListComponent,
    AddAuthorComponent,
    AuthorDetailsComponent,
    AuthorUpdateComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    ListOfBookComponent,
    ListOfBookShopsComponent,
    AddBookShopComponent,
    UpdateBookShopComponent,
    DeleteBookShopComponent,
    AddMultipleBooksComponent,
    BookDetailsComponent,
    BookshopDetailsComponent,
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
