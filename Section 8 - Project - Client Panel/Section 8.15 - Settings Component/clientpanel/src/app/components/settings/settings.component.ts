import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/Settings';

@Component({
   selector: 'app-settings',
   templateUrl: './settings.component.html',
   styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
   settings: Settings;

   constructor(
      private _router: Router,
      private _flashMessage: FlashMessagesService,
      private _settingsService: SettingsService
   ) { }

   ngOnInit() {
      this.settings = this._settingsService.getSettings();
   }

   onSubmit() {
      this._settingsService.changeSettings(this.settings);
      this._flashMessage.show('Settings updated.', {
         cssClass: 'alert-success', timeout: 4000
      });
   }
}