import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookShop} from "../models/bookShop";



const baseUrl = 'http://localhost:8080/api/bookshops'
@Injectable({
  providedIn: 'root'
})
export class BookShopServicesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<BookShop[]> {
    return this.http.get<BookShop[]>(baseUrl);
  }

  get(id: any): Observable<BookShop>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data)

  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
  }

  deleteAll():Observable<any>{
    return this.http.delete(baseUrl)
  }
}
