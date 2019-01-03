import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

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
   data: any;

   constructor(private _dataService: DataService) { }

   ngOnInit() {
      // Subscribing to an Observable.
      this._dataService.getData().subscribe(data => {
         console.log(data);
      });

      // Note: users could be called anything. This is the returned data from the observer.next()
      this._dataService.getUser().subscribe(users => {
         this.users = users;
         this.loaded = true;
      });
   }

   // Form Submit function.
   onSubmit({value, valid}: {value: User, valid: boolean }) {
      if(!valid) {
         console.log('Form is not valid');
      } else {
         value.isActive = true;
         value.registered = new Date();
         value.hide = true;
         this._dataService.addUser(value);
         this.form.reset();
      }
   }
}