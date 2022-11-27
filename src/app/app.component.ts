import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  persons: Person[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 25
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
  ];
}
