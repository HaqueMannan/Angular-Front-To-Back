import { Component, OnInit } from "@angular/core";

import { LogService } from "../../services/log.service";

@Component({
   selector: "app-log-form",
   templateUrl: "./log-form.component.html",
   styleUrls: ["./log-form.component.css"]
})
export class LogFormComponent implements OnInit {
   id: string;
   text: string;
   date: any;
   isNew: boolean = true;

   constructor(private _logService: LogService) {}

   ngOnInit() {
      // Subscribe to the selected log observable
      this._logService.selectedLog.subscribe(log => {
         if(log.id !== null) {
            this.isNew = false;
            this.id = log.id;
            this.text = log.text;
            this.date = log.date;
         }
      });
   }

   onSubmit() {
      // Check if new log
      if(this.isNew) {
         // Create new log object
         const newLog = {
            id: this.generateUID(),
            text: this.text,
            date: new Date()
         }
         // Add New Log
         this._logService.addLog(newLog);
      } else {
         // Create update log object
         const updLog = {
            id: this.id,
            text: this.text,
            date: new Date()
         }
         // Update Existing Log
         this._logService.updateLog(updLog);
      }
   }

   // Generate RFC4122 version 4 compliant solution
   generateUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
}