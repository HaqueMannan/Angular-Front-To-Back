import { Component } from '@angular/core';

@Component ({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})

export class UserComponent {
   // Properties:
   firstName = 'John';
   lastName = 'Doe';
   age = 28;
   address = {
      street: '1 Abbey Street',
      city: 'Birmingham',
      country: 'UK'
   };

   // Methods:
   // Constructors automatically runs when the component instantiates/initiates.
   constructor() {
      console.log('Hello user...');
      this.sayHello();
      console.log(this.age);
      this.hasBirthday();
      console.log(this.age);
   }
   // Own custom method:
   sayHello() {
      console.log(`Hello ${this.firstName}`);
   }
   hasBirthday() {
      this.age += 1;
   }
   showAge() {
      return this.age;
   }
}