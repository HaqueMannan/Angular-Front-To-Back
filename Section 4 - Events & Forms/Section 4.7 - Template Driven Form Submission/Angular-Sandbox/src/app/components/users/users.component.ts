import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
   user: User = {
      firstName: '',
      lastName: '',
      email: ''
   };
   users: User[];
   showExtended: boolean = true;
   loaded: boolean = false;
   enableAdd: boolean = false;
   showUserForm: boolean = false;
   @ViewChild('userForm') form: any;

   constructor() { }

   ngOnInit() {
      this.users = [
         {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@email.com',
            isActive: true,
            registered: new Date('01/02/2018 08:30:00'),
            hide: true
         },
         {
            firstName: 'Kathy',
            lastName: 'Blyth',
            email: 'kathy.blyth@email.com',
            isActive: false,
            registered: new Date('07/15/2018 18:00:00'),
            hide: true
         },
         {
            firstName: 'Larry',
            lastName: 'Long',
            email: 'larry.long@email.com',
            isActive: true,
            registered: new Date('10/10/2017 10:55:00'),
            hide: true
         }
      ];

      this.loaded = true;
   }

   // Form Submit function.
   onSubmit({value, valid}: {value: User, valid: boolean }) {
      if(!valid) {
         console.log('Form is not valid');
      } else {
         value.isActive = true;
         value.registered = new Date();
         value.hide = true;
         this.users.unshift(value);
         this.form.reset();
      }
   }
}