import { Component, OnInit } from "@angular/core";

import { Log } from "../../models/Log";
import { LogService } from "../../services/log.service";

@Component({
   selector: "app-log-form",
   templateUrl: "./log-form.component.html",
   styleUrls: ["./log-form.component.css"]
})
export class LogFormComponent implements OnInit {
   log: Log;

   constructor(private _logService: LogService) {}

   ngOnInit() {
      // Subscribe to the selected log observable
      this._logService.selectedLog.subscribe(log => {
         if(log.id !== null) {
            this.log.id = log.id;
            this.log.text = log.text;
            this.log.date = log.date;
         }
      });
   }
}