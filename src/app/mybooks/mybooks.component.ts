import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/bookservice.service';
import { BookModel } from '../shared/bookmodel';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {

  mybooks: BookModel[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getMyBooks()
      .subscribe((data: BookModel[]) => {
        this.mybooks = data;
      });
  }
}
