import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  books : any;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
  ){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
    .then(books => this.books = books);
  };

  getBack(): void {
    this.location.back();
  };

}
