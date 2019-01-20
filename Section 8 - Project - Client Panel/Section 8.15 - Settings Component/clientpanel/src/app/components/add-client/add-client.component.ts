import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Client } from '../../models/Client';

import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';


@Component({
   selector: 'app-add-client',
   templateUrl: './add-client.component.html',
   styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
   client: Client = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      balance: 0
   }
   disableBalanceOnAdd: boolean;
   @ViewChild('clientForm') form: any;

   constructor(
      private _flashMessage: FlashMessagesService,
      private _router: Router,
      private _clientService: ClientService,
      private _settingsService: SettingsService
   ) { }

   ngOnInit() {
      this.disableBalanceOnAdd = this._settingsService.getSettings().disableBalanceOnAdd;
   }

   onSubmit({value, valid}: {value: Client, valid: boolean}) {
      if(this.disableBalanceOnAdd) {
         value.balance = 0;
      }

      if(!valid) {
         // Show FlashMessage for error
         this._flashMessage.show('Please complete the form correctly.', {
            cssClass: 'alert-danger', timeout: 4000
         });
      }  else {
         // Add new Client
         this._clientService.newClient(value);
         // Show FlashMessage for success
         this._flashMessage.show('New client added.', {
            cssClass: 'alert-success', timeout: 4000
         });
         // Redirect to dashboard
         this._router.navigate(['/']);
      }
   }
}