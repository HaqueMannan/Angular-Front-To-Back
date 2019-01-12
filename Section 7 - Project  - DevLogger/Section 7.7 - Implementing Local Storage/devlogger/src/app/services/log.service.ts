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
      this.logs = []
   }

   getLogs(): Observable<Log[]> {
      // Fetch from LocalStorage
      if(localStorage.getItem('logs') === null) {
         this.logs = [];
      } else {
         this.logs = JSON.parse(localStorage.getItem('logs'));
      }

      return of(this.logs.sort((a, b) => {
         return b.date - a.date;
      }));
   }

   setFormLog(log: Log) {
      this._logSource.next(log);
   }

   clearState() {
      this._stateSource.next(true);
   }

   addLog(log: Log) {
      this.logs.unshift(log);

      // Add to LocalStorage
      localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   updateLog(log: Log) {
      this.logs.forEach((curr, index) => {
         if(log.id === curr.id) {
            this.logs.splice(index, 1);
         }
      });
      this.logs.unshift(log);

      // Update to LocalStorage
      localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   deleteLog(log: Log) {
      this.logs.forEach((curr, index) => {
         if(log.id === curr.id) {
            this.logs.splice(index, 1);
         }
      });

      // Delete from LocalStorage
      localStorage.setItem('logs', JSON.stringify(this.logs));
   }
}
