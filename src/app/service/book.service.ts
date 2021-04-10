import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../config/AppConfig';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../model/book';
import { Author } from '../model/Author';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  constructor(private httpClient: HttpClient) { }

  /**
   * Retrieve all books.
   */
  public getAllBooks() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('uuid', uuidv4());

    return this.httpClient.get<Book[]>(`${AppConfig.basePath}api/private/v1/books`, { headers })
      .pipe(map(response => {
        response.forEach(book => {
          book.authors.forEach(author => {
            author.fullName = author.firstName + ' ' + author.lastName + ' ';
          });
          this.books.push(book);
        });

        return this.books;
      }));
  }
}
