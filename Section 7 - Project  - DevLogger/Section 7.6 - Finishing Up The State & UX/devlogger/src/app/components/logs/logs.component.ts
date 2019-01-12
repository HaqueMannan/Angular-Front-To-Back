import { Component, OnInit } from "@angular/core";

import { Log } from "../../models/Log";
import { LogService } from "../../services/log.service";

@Component({
   selector: "app-logs",
   templateUrl: "./logs.component.html",
   styleUrls: ["./logs.component.css"]
})

export class LogsComponent implements OnInit {
   logs: Log[];
   selectedLog: Log;
   loaded: boolean = false;

   constructor(private _logService: LogService) {}

   ngOnInit() {
      this._logService.stateClear.subscribe(clear => {
         if(clear) {
            this.selectedLog = {id: '', text: '', date: ''};
         }
      });

      this._logService.getLogs().subscribe(logs => {
         this.logs = logs;
         this.loaded = true;
      });
   }

   // Calls setFormLog observable method to pass in the clicked log.
   onSelect(log: Log) {
      this._logService.setFormLog(log);
      this.selectedLog = log;
   }

   onDelete(log: Log) {
      if(confirm('Are you sure?')) {
         this._logService.deleteLog(log);
      }
   }
}