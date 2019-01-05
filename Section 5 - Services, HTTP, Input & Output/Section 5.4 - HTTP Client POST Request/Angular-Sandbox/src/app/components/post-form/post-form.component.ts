import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
   selector: 'app-post-form',
   templateUrl: './post-form.component.html',
   styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

   constructor(private _postService: PostService) { }

   ngOnInit() {
   }

   addPost(title, body) {
      if(!title || !body) {
         alert('Please add post!')
      } else {
         // console.log(title, body);
         this._postService.savePost({title, body} as Post).subscribe(post => {
            console.log(post);
         });
      }
   }
}