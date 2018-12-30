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
   enableAdd: boolean = true;

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
            },
            isActive: true,
            registered: new Date('01/02/2018 08:30:00'),
            hide: true
         },
         {
            firstName: 'Kathy',
            lastName: 'Blyth',
            age: 18,
            address: {
               street: '20 Barkby Road',
               city: 'Coventry',
               country: 'UK'
            },
            isActive: false,
            registered: new Date('07/15/2018 18:00:00'),
            hide: true
         },
         {
            firstName: 'Larry',
            lastName: 'Long',
            age: 35,
            address: {
               street: '33 Coalville Avenue',
               city: 'Dublin',
               country: 'UK'
            },
            isActive: true,
            registered: new Date('10/10/2017 10:55:00'),
            hide: true
         }
      ];

      this.loaded = true;
   }

   // Push method is part of JavaScript which adds an object onto an array.
   addUser(user: User) {
      this.users.push(user);
   }

   // Toggle show/hide user details. Note: this function expression can be added directly in the template file click event rather than calling this function.
   // toggleHide(user: User) {
   //    user.hide = !user.hide;
   // }

}