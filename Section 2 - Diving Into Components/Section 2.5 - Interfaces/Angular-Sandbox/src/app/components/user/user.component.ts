import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component ({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})

export class UserComponent {
   // Properties => Interface:
   user: User;

   // Methods:
   constructor() {
      this.user = {
         firstName: 'John',
         lastName: 'Doe',
         age: 28,
         address: {
            street: '1 Abbey Street',
            city: 'Birmingham',
            country: 'UK'
         }
      }
   }
}