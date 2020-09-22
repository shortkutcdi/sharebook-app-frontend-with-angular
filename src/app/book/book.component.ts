import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../shared/bookmodel';
import { BookService } from '../shared/bookservice.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: BookModel;
  @Input() editMode: boolean;

  @Output() refreshBooks = new EventEmitter<boolean>();

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  deleteBook(idBook: number) {
    this.bookService.deleteBook(idBook).subscribe(() => {
        this.refreshBooks.emit();
      }, (response) => {
        if (response && response.status === 409) {
          alert('Erreur suppression; livre en cours d\'emprunt');
        }
      }
      );
  }

}
