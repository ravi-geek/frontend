import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: Book[] = [{ id: 1, name: 'Design Patterns', author: 'Gangs of Four', price: 123 },
  { id: 2, name: 'Micro Services & Saga Patterns', author: 'David Bechham', price: 1100 },
  { id: 3, name: 'System Design', author: 'Virat Kohli', price: 1000 },
  { id: 4, name: 'Clean Architecture', author: 'Sachin tendulkar', price: 1200 },
  { id: 5, name: 'Object oriented programming', author: 'Java brains', price: 1300 }
  ];
  displayedColumns: string[] = ['id', 'name', 'author', 'price'];
}

type Book = {
  id: number;
  name: string;
  author: string;
  price: number;
};
