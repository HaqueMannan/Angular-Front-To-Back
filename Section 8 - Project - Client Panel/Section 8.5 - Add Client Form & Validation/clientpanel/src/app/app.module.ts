import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { ClientService } from '../app/services/client.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      DashboardComponent,
      ClientsComponent,
      AddClientComponent,
      EditClientComponent,
      ClientDetailsComponent,
      LoginComponent,
      RegisterComponent,
      SettingsComponent,
      PageNotFoundComponent,
      SidebarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
      AngularFirestoreModule,
      AngularFireAuthModule
   ],
   providers: [ClientService],
   bootstrap: [AppComponent]
})
export class AppModule { }