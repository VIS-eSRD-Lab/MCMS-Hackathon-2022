import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/Book";

const baseUrl = 'http://localhost:8080/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  // Alert System
  sendListUpdateAlert(bookMessage: string) {
    this.bookSubject.next({ text: bookMessage });
  }

  getListUpdateAlert(): Observable<any> {
    return this.bookSubject.asObservable();
  }
  // Alert System

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${ baseUrl }/${ id }`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${ baseUrl }/${ id }`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${ baseUrl }/${ id }`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }





}
