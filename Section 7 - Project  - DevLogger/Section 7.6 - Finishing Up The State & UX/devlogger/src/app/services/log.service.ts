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

   private _logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
   selectedLog = this._logSource.asObservable()

   private _stateSource = new BehaviorSubject<boolean>(true);
   stateClear = this._stateSource.asObservable()

   constructor() {
      // this.logs = [
      //    {
      //       id: "1",
      //       text: "Generated components.",
      //       date: new Date("01/09/2019 05:30:23")
      //    },
      //    {
      //       id: "2",
      //       text: "Added Bootstrap.",
      //       date: new Date("01/10/2019 09:23:13")
      //    },
      //    {
      //       id: "3",
      //       text: "Added Logs components.",
      //       date: new Date("01/11/2019 22:45:23")
      //    }
      // ]

      this.logs = []
   }

   getLogs(): Observable<Log[]> {
      return of(this.logs);
   }

   setFormLog(log: Log) {
      this._logSource.next(log);
   }

   clearState() {
      this._stateSource.next(true);
   }

   addLog(log: Log) {
      this.logs.unshift(log);
   }

   updateLog(log: Log) {
      this.logs.forEach((curr, index) => {
         if(log.id === curr.id) {
            this.logs.splice(index, 1);
         }
      });
      this.logs.unshift(log);
   }

   deleteLog(log: Log) {
      this.logs.forEach((curr, index) => {
         if(log.id === curr.id) {
            this.logs.splice(index, 1);
         }
      });
   }
}
