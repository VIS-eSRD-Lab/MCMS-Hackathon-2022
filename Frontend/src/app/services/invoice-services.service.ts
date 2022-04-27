import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../models/author";
import {Invoice} from "../models/Invoice";

const baseUrl = 'http://localhost:8080/api/invoice'
@Injectable({
  providedIn: 'root'
})
export class InvoiceServicesService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(baseUrl);
  }

  get(id: any): Observable<Invoice> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Invoice[]> {
    console.log(baseUrl+'?name='+name);
    return this.http.get<Author[]>(`${baseUrl}?name=${name}`);
  }

}
