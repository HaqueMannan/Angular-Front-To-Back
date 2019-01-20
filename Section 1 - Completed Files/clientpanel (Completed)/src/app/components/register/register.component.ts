import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   email: string;
   password: string;

   constructor(
      private _authService: AuthService,
      private _router: Router,
      private _flashMessage: FlashMessagesService
   ) { }

   ngOnInit() {
   }

   onSubmit() {
      this._authService.register(this.email, this.password)
         .then(res => {
            this._flashMessage.show('Registration completed. You are now logged in.', {
               cssClass: 'alert-success', timeout: 4000
            });
            this._router.navigate(['/']);
         })
         .catch(err => {
            this._flashMessage.show(err.messages, {
               cssClass: 'alert-danger', timeout: 4000
            });
         });
   }
}