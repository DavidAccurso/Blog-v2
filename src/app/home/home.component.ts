import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { PostServiceComponent } from '../post-service/post-service.component';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  posts: Post[];
  hasPosts: boolean = false;
  
  constructor(
    public postService : PostServiceComponent
  ) {
    // this.posts = postService.GetAllPosts();
    this.hasPosts = true;
   }

  ngOnInit() {
    // if (this.posts.length > 0) {
    //   this.hasPosts = true;
    // }
  }
}
