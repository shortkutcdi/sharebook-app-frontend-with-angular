import { Component, OnInit } from '@angular/core';
import { BookModel } from '../shared/bookmodel';
import { BookService } from '../shared/bookservice.service';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  books: BookModel[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = [];
    this.bookService.getBooksAvailable().subscribe((data: BookModel[]) => {
      this.books = data;
    }, () => {
      alert('Error detected');
    });
  }

}
