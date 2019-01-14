import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
   selector: 'app-client-details',
   templateUrl: './client-details.component.html',
   styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
   id: string;
   client: Client;
   hasBalance: boolean = false;
   showBalaceUpdateInput: boolean = false;

   constructor(
      private _router: Router,
      private _route: ActivatedRoute,
      private _flashMessage: FlashMessagesService,
      private _clientService: ClientService
   ) { }

   ngOnInit() {
      // Get id from URL
      this.id = this._route.snapshot.params['id'];
      // Get Client data
      this._clientService.getClient(this.id).subscribe(client => {
         if(client != null) {
            if(client.balance > 0) {
               this.hasBalance = true;
            }
         }
         this.client = client;
      });
   }
}