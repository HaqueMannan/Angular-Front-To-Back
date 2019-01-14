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

   // Retrieve all clients:
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

   // Client Details:
   getClient(id: string): Observable<Client> {
      this.clientDoc = this._afs.doc<Client>(`clients/${id}`);
      this.client = this.clientDoc.snapshotChanges().pipe(
         map(action => {
            if(action.payload.exists === false) {
               return null;
            } else {
               const data = action.payload.data() as Client;
               data.id = action.payload.id;
               return data;
            }
         })
      );
      return this.client;
   }

   // Add new client record:
   newClient(client: Client) {
      this.clientsCollection.add(client);
   }

   // Update client details:
   updateClient(client: Client) {
      this.clientDoc = this._afs.doc(`clients/${client.id}`);
      this.clientDoc.update(client);
   }
}