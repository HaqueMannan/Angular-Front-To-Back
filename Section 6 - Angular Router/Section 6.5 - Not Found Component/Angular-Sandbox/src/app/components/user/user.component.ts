import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component ({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
   // Properties => Interface:
   user: User;

   // Methods:
   constructor() {
      
   }

   // LifeCycle Method
   ngOnInit() {
      this.user = {
         firstName: 'John',
         lastName: 'Doe',
         email: 'john.doe@gmail.com'
      }
   }
}