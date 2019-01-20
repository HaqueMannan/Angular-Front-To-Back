import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Client } from '../../models/Client';

import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

@Component({
   selector: 'app-edit-client',
   templateUrl: './edit-client.component.html',
   styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
   id: string;
   client: Client = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      balance: 0
   };
   disableBalanceOnEdit: boolean;

   constructor(
      private _router: Router,
      private _route: ActivatedRoute,
      private _flashMessage: FlashMessagesService,
      private _clientService: ClientService,
      private _settingsService: SettingsService
   ) { }

   ngOnInit() {
      // Set disableBalanceOnEdit value
      this.disableBalanceOnEdit = this._settingsService.getSettings().disableBalanceOnEdit;

      // Get id from URL
      this.id = this._route.snapshot.params['id'];
      // Get Client data
      this._clientService.getClient(this.id).subscribe(client => this.client = client);
   }

   onSubmit({value, valid}: {value: Client, valid: boolean}) {
      if(!valid) {
         this._flashMessage.show('Please complete the form correctly.', {
            cssClass: 'alert-danger', timeout: 4000
         });
      } else {
         // Add id to Client
         value.id = this.id;
         // Update Client
         this._clientService.updateClient(value);
         // Show FlashMessage for success
         this._flashMessage.show('Client updated.', {
            cssClass: 'alert-success', timeout: 4000
         });
         // Redirect to dashboard
         this._router.navigate(['/client/' + this.id]);
      };
   }
}