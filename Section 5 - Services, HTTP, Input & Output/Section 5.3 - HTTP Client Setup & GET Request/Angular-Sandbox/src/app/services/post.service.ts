import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
   providedIn: 'root'
})
export class PostService {
   postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'

   constructor(private _http: HttpClient) { }

   getPosts() : Observable<Post[]> {
      return this._http.get<Post[]>(this.postsUrl);
   }
}
