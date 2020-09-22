import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/bookservice.service';
import { BookModel } from '../shared/bookmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  book: BookModel = {
    name: '',
    category: ''
  };

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  save(){
    this.bookService.saveBook(this.book).subscribe(() => {
      this.router.navigate(['']); // revient à la home une fois enregistré
    }, (response) => {
      if (response && response.error) {
        alert('Erreur détectée');
      }
    });
  }

}
