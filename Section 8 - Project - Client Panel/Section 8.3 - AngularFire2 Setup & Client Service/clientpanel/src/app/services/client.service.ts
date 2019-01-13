import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from "rxjs"
import { map } from "rxjs/operators"
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Client } from '../models/Client';

@Injectable({
   providedIn: 'root'
})
export class ClientService {
   clientsCollection: AngularFirestoreCollection<Client>;
   clientDoc: AngularFirestoreDocument<Client>;
   clients: Observable<Client[]>;
   client: Observable<Client>;

   constructor(private _afs: AngularFirestore) {
      this.clientsCollection = this._afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
   }

   getClients(): Observable<Client[]> {
      // Get client with the id
      this.clients = this.clientsCollection.snapshotChanges().pipe(
         map(changes => changes.map(action => {
            const data = action.payload.doc.data() as Client;
            data.id = action.payload.doc.id;
            return data;
         }))
      );
      return this.clients;
   }
}