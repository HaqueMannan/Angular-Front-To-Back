import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component'
import { PostFormComponent } from './components/post-form/post-form.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      UsersComponent,
      NavbarComponent,
      PostsComponent,
      PostFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      UserService,
      PostService
   ],
   bootstrap: [AppComponent]
})

export class AppModule { }
