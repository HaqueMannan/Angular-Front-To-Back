import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
   selector: 'app-post-form',
   templateUrl: './post-form.component.html',
   styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
   post: Post;
   @Output() newPost: EventEmitter<Post> = new EventEmitter;
   @Output() updatedPost: EventEmitter<Post> = new EventEmitter;
   @Input() currentPost: Post;
   @Input() isEdit: boolean;

   constructor(private _postService: PostService) { }

   ngOnInit() {
   }

   addPost(title, body) {
      if(!title || !body) {
         alert('Please add post!')
      } else {
         // console.log(title, body);
         this._postService.savePost({title, body} as Post).subscribe(post => {
            this.newPost.emit(post);
         });
      }
   }

   // Output the updatedPost so that the value can be used in the post.component file to update the posts list and reset the isEdit property back to false and clear the form.
   updatePost() {
      this._postService.updatePost(this.currentPost).subscribe(post => {
         this.updatedPost.emit(post);
      });
   }
}