import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-retrieve',
  templateUrl: './book-retrieve.component.html'
})
export class BookRetrieveComponent implements OnInit {
  @ViewChild('search', { static: true })
  public search!: ElementRef;
  books: Book[] = [];

  constructor(private formBuilder: FormBuilder, private service: BookService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(response => {
      this.books = response;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.search.nativeElement.focus();
    }, 100);
  }

  ngOnDestroy(): void {
    this.books.length = 0;
  }
}
