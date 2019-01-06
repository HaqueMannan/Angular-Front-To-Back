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

   // GET request takes in the url only.
   getPosts() : Observable<Post[]> {
      return this._http.get<Post[]>(this.postsUrl);
   }

   // POST request takes in the URL, object, and HttpHeader.
   savePost(post: Post): Observable<Post> {
      return this._http.post<Post>(this.postsUrl, post, httpOptions);
   }

   // PUT request takes in the template string url, object and HttpHeader.
   updatePost(post: Post): Observable<Post> {
      const url = `${this.postsUrl}/${post.id}`;
      return this._http.put<Post>(url, post, httpOptions);
   }

   // DELETE request takes in the template string url, object and HttpHeader.
   removePost(post: Post | number): Observable<Post> {
      const id = typeof post === 'number' ? post : post.id
      const url = `${this.postsUrl}/${id}`;
      return this._http.delete<Post>(url, httpOptions);
   }
}
