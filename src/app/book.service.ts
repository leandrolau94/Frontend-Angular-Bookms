import { Injectable } from '@angular/core';
import axios from 'axios';

import { Book } from './book';
//import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {
    this.getBooks();
  };

  async getBooks(): Promise<any> {
    try {
      const response = await axios.get("http://localhost:8080/books");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
