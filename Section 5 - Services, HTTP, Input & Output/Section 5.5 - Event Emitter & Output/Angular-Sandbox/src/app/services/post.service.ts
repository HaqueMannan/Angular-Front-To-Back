import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

// Http Header option that is sent with POST requests.
const httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
   providedIn: 'root'
})
export class PostService {
   postsUrl: string = 'https://jsonplaceholder.typicode.com/posts'

   constructor(private _http: HttpClient) { }

   getPosts() : Observable<Post[]> {
      return this._http.get<Post[]>(this.postsUrl);
   }

   // Post request takes in the URL, object, and HttpHeader.
   savePost(post: Post): Observable<Post> {
      return this._http.post<Post>(this.postsUrl, post, httpOptions);
   }
}
