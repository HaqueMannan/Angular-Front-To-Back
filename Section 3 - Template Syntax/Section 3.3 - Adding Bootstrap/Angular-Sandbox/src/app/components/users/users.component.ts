import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
   users: User[];
   showExtended: boolean = true;
   loaded: boolean = false;

   constructor() { }

   ngOnInit() {
      this.users = [
         {
            firstName: 'John',
            lastName: 'Doe',
            age: 28,
            address: {
               street: '1 Abbey Street',
               city: 'Birmingham',
               country: 'UK'
            }
         },
         {
            firstName: 'Kathy',
            lastName: 'Blyth',
            age: 18,
            address: {
               street: '20 Barkby Road',
               city: 'Coventry',
               country: 'UK'
            }
         },
         {
            firstName: 'Larry',
            lastName: 'Long',
            age: 35,
            address: {
               street: '33 Coalville Avenue',
               city: 'Dublin',
               country: 'UK'
            }
         }
      ];

      this.loaded = true;

      this.addUser({
         firstName: 'Elena',
         lastName: 'Gilbert',
      })

      // Show/Hide the extended user information:
      // this.showExtended = false;

   }

   // Push method is part of JavaScript which adds an object onto an array.
   addUser(user: User) {
      this.users.push(user);
   }
}
