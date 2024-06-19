import { Component, Input } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  newBook: Book = {
    isbn: "ISBN",
    title: "title",
    numPages: 0,
    author: "author",
    imgUrl: "https://url",
    borrowed: false,
  };
  
  constructor(private router: Router){};

  postBook(): any {
    // await axios.post("http://localhost:8080/books", this.newBook)
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    console.log(this.newBook);
    return this.router.navigate(['/', 'menu']);
  };

}
