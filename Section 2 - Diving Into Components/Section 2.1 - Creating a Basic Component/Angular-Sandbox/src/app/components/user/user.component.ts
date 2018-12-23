import { Component } from '@angular/core';

@Component ({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']

   // Inline without having separate html and css component files; however, this is bad practice.
   // template: '<h2>John Doe</h2>'
   // styles: [`
   //    h2 {
   //       color: blue;
   //    }
   // `]
})

export class UserComponent {
   
}