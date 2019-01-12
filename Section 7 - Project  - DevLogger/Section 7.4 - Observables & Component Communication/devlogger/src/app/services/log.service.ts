import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs';
import { of } from "rxjs"

import { Log } from "../models/Log";

@Injectable({
   providedIn: "root"
})
export class LogService {
   logs: Log[];

   // Source
   private _logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
   // Observable of the logSource
   selectedLog = this._logSource.asObservable()

   constructor() {
      this.logs = [
         {
            id: "1",
            text: "Generated components.",
            date: new Date("01/09/2019 05:30:23")
         },
         {
            id: "2",
            text: "Added Bootstrap.",
            date: new Date("01/10/2019 09:23:13")
         },
         {
            id: "3",
            text: "Added Logs components.",
            date: new Date("01/11/2019 22:45:23")
         }
      ]
   }

   getLogs(): Observable<Log[]> {
      return of(this.logs);
   }

   // Observable method - each time click a different log.text link from log component, subscribe to the log-form component and update the text inside the form input field with the log text.
   setFormLog(log: Log) {
      this._logSource.next(log);
   }
}
