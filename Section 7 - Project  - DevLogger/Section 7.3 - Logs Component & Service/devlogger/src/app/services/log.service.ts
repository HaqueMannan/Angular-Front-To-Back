import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
   providedIn: "root"
})
export class LogService {
   logs: Log[];

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

   getLogs() {
      return this.logs;
   }
}
