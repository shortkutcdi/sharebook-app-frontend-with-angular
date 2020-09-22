import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BookModel } from './bookmodel';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { } // injection de dépendance

  getMyBooks(){
    return this.http.get('/users/1/books');
  }

  deleteBook(idBook: number): any {
    return this.http.delete('/books/' + idBook );
  }

  saveBook(book: BookModel) {
    return this.http.post('/users/1/books', book);
  }

  getBooksAvailable() {
    return this.http.get('/users/1/books/status/FREE');
  }
  /**
  *   getMyBooks1(): Observable<BookModel[]> {
  *     return this.http.get<BookModel[]>('/users/1/books');
  *  }
  *  getMyBooks2() {
  *    return this.http.get('${BASE_URL}/users/1/books');
  *  }
   */


}
