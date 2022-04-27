import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invoice} from "../models/invoice";
import {Book} from "../models/Book";
import {Author} from "../models/author";

const baseUrl = 'http://localhost:8080/api/invoices'

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Invoice[]>{
    return this.http.get<Invoice[]>(baseUrl);

  }

  get(id: any): Observable<Author> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }






}
