import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   isLoggedIn: boolean;
   showRegister: boolean;
   loggedInUser: string;

   constructor(
      private _router: Router,
      private _flashMessage: FlashMessagesService,
      private _authService: AuthService
   ) { }

   ngOnInit() {
      this._authService.getAuth().subscribe(auth => {
         if(auth) {
            this.isLoggedIn = true;
            this.loggedInUser = auth.email;
         } else {
            this.isLoggedIn = false;
         }
      });
   }

   onLogoutClick() {
      this._authService.logout();
      this._flashMessage.show('You are now logged out.', {
         cssClass: 'alert-success', timeout: 4000
      });
      this._router.navigate(['/login']);
   }
}