import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthorListComponent} from "./components/author-list/author-list.component";
import {AddAuthorComponent} from "./components/add-author/add-author.component";
import {AuthorDetailsComponent} from "./components/author-details/author-details.component";
import {AuthorUpdateComponent} from "./components/author-update/author-update.component";
import {AddBookComponent} from "./components/book/add-book/add-book.component";
import {AddBookShopComponent} from "./components/bookShop/add-book-shop/add-book-shop.component";
import {ListOfBookComponent} from "./components/book/list-of-book/list-of-book.component";
import {ListOfBookShopsComponent} from "./components/bookShop/list-of-book-shops/list-of-book-shops.component";
import {BookDetailsComponent} from "./components/book/book-details/book-details.component";
import { BookshopDetailsComponent } from './components/bookshop/bookshop-details/bookshop-details.component';
import {UpdateBookComponent} from "./components/book/update-book/update-book.component";
import {UpdateBookShopComponent} from "./components/bookShop/update-book-shop/update-book-shop.component";
import {DetailsInvoiceComponent} from "./details-invoice/details-invoice.component";
import {AddInvoiceComponent} from "./add-invoice/add-invoice.component";
import {UpdateInvoiceComponent} from "./update-invoice/update-invoice.component";
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'author-details/:id', component: AuthorDetailsComponent},
  {path: 'update-author/:id', component: AuthorUpdateComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'book-list', component: ListOfBookComponent},
  {path: 'book-details/:id', component: BookDetailsComponent },
  {path:'update-book/:id',component:UpdateBookComponent},
  {path:'add-bookShop',component: AddBookShopComponent},
  {path: 'bookshop-list', component: ListOfBookShopsComponent},
  {path:'bookshop-details/:id',component: BookshopDetailsComponent},
  {path:'update-bookshop/:id',component:UpdateBookShopComponent},
  {path: 'details-invoice/:id',component:DetailsInvoiceComponent},
  {path:'add-invoice', component:AddInvoiceComponent},
  {path:'update-invoice',component:UpdateInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
