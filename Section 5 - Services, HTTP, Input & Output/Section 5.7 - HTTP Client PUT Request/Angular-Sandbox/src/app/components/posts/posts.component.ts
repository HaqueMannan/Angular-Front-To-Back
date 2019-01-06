import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
   selector: 'app-posts',
   templateUrl: './posts.component.html',
   styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   posts: Post[];
   currentPost: Post = {
      id: 0,
      title: '',
      body: ''
   }
   isEdit: boolean = false;

   constructor(private _postService: PostService) { }

   ngOnInit() {
      this._postService.getPosts().subscribe(posts => {
         console.log(posts);
         this.posts = posts;
      });
   }

   onNewPost(post: Post) {
      this.posts.unshift(post);
   }

   editPost(post: Post) {
      this.currentPost = post;
      this.isEdit = true;
   }

   // Loop through posts array property to find the updated post and .splice() to remove the post from the array and then .unshift() to add the new updated post to the top of the array list. Finally, set the isEdit property to false.
   onUpdatedPost(post: Post) {
      this.posts.forEach((curr, index) => {
         if(post.id === curr.id) {
            this.posts.splice(index, 1);
            this.posts.unshift(post);
            this.isEdit = false;
            this.currentPost = {
               id: 0,
               title: '',
               body: ''
            };
         };
      });
   }
}