import { Component, OnInit } from '@angular/core';
import {BookShop} from "../../../models/bookShop";
import {BookShopServicesService} from "../../../services/book-shop-services.service";
@Component({
  selector: 'app-list-of-book-shops',
  templateUrl: './list-of-book-shops.component.html',
  styleUrls: ['./list-of-book-shops.component.css']
})
export class ListOfBookShopsComponent implements OnInit {
  bookShops?:BookShop[];
  currentBookShop?:BookShop = {};
  currentIndex = -1;
  name = ""

  dtOptions: DataTables.Settings = {};

  constructor(private bookShopService: BookShopServicesService) { }

  ngOnInit(): void {
    this.getAllBookShops();
    this.dtOptions = {
      processing: true ,
      paging: true,
      pageLength: 5,
      responsive: true
    };

  }

  getAllBookShops(): void {
    this.bookShopService.getAll()
      .subscribe({
        next: (data)=>{
          this.bookShops = data;
          console.log(data);
        },
        error: (err)=>{
          console.log(err);
        }
      })
  }

  refreshList():void {
    this.getAllBookShops();
    this.currentBookShop = {};
    this.currentIndex = -1;
  }

  removeAllBooks():void {
    if(confirm("Are you sure you want to delete all book shops?")) {
      this.bookShopService.deleteAll()
        .subscribe({
          next: (data)=>{
            console.log(data);
            this.refreshList();
          },
          error: (err)=>{
            console.log(err);
          }
        });
    }
  }



}
