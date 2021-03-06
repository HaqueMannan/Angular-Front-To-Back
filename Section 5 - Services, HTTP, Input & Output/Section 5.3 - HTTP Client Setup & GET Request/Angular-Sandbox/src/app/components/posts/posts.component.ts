import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
   selector: 'app-posts',
   templateUrl: './posts.component.html',
   styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   posts: Post[];

   constructor(private _postService: PostService) { }

   ngOnInit() {
      this._postService.getPosts().subscribe(posts => {
         console.log(posts);
         this.posts = posts;
      });
   }
}