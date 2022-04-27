import { Component, OnInit } from '@angular/core';
import {BookShop} from "../../../models/bookShop";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BookShopServicesService} from "../../../services/book-shop-services.service";

@Component({
  selector: 'app-bookshop-details',
  templateUrl: './bookshop-details.component.html',
  styleUrls: ['./bookshop-details.component.css']
})
export class BookshopDetailsComponent implements OnInit {

  id?:string;
  bookShop = new BookShop();

  constructor(private route: ActivatedRoute, private router: Router, private bookShopService: BookShopServicesService) { }

  ngOnInit(): void {
    this.bookShop = new BookShop();

    this.route.params.subscribe(
       (params:Params)=>{
        this.id = params['id'.toString()];
        this.bookShopService.get(this.id)
          .subscribe({
            next:(data)=>{
              this.bookShop = data;
              console.log(data);
            },
            error:(e)=>console.error(e)
          });
    }
    );
  }

  deleteBookShop(id:string){
    if(confirm('Delete BookShop?'))
    this.bookShopService.delete(id)
      .subscribe({
        next:(data)=>{
          this.bookShop = data;
          console.log(data);

        },
        error:(e)=>console.error(e)
      });
    this.router.navigate(['/bookshop-list']).then(()=>{
     // location.reload();
    });
  }

  updateBookShop(id: string){
    this.router.navigate(['/update-bookshop', id]).then(()=>{});
  }

}
