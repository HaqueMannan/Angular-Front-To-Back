import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';


@Injectable({
   providedIn: 'root'
})
export class DataService {
   users: User[];
   // Setup of an Observable property.
   data: Observable<Array<any>>;

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

   // Example of an Observable method.
   getData() {
      this.data = new Observable(observer => {
         setTimeout(() => {
            observer.next([1])
         }, 1000);

         setTimeout(() => {
            observer.next([2])
         }, 2000);

         setTimeout(() => {
            observer.next([3])
         }, 3000);

         setTimeout(() => {
            observer.next([{name: 'Andy'}])
         }, 4000);
      });

      return this.data;
   }

   getUser(): Observable<User[]> {
      return of(this.users);
   }

   addUser(user: User) {
      this.users.unshift(user);
   }
}