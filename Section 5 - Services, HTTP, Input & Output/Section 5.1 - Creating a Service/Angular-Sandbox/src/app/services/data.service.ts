import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable({
   providedIn: 'root'
})
export class DataService {
   users: User[]

   constructor() {
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
      ]
   }

   getUser() {
      return this.users;
   }

   addUser(user: User) {
      this.users.unshift(user);
   }
}
