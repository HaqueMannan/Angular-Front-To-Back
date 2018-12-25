import { Component } from '@angular/core';

@Component ({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})

export class UserComponent {
   // Properties:
   firstName: string;
   lastName: string;
   age: number;
   address;

   // Assigning Types to Variables:
   foo: any;
   hasKids: boolean;
   mixedArray: any[];
   stringArray: string[];
   numberArray: number[];
   myTuple: [string, number, boolean];
   v: void;
   u: undefined;
   n: null;

   // Methods:
   constructor() {
      this.firstName = 'John',
      this.lastName = 'Doe',
      this.age = 28,

      this.address = {
         street: '1 Abbey Street',
         city: 'Birmingham',
         country: 'UK'
      }

      // Assigning Values to the Variables:
      this.foo =  true;
      this.hasKids = false;
      this.mixedArray = [1, 'a', true, null];
      this.stringArray = ['Hello', 'World'];
      this.numberArray = [1, 2, 3];
      this.myTuple = ['a', 1, true], 'Hello';
      this.v = undefined;
      this.u = undefined;
      this.n = null;
      this.addNumbers(1, 2);
   }
   showAge() {
      return this.age;
   }
   addNumbers(num1: number, num2: number): number {
      return num1 + num2;
   }
}