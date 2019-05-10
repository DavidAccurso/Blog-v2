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
  isLoading: boolean;
  public postId: number = 1;

  constructor(
    public postService : PostServiceComponent
  ) {}

  ngOnInit() {
    this.postId = 1;
    this.isLoading = true;
    this.postService.getPosts().then(_posts => {
      this.posts = _posts;
      console.log(_posts);
      alert(_posts);
    })
    .catch(error =>{
      alert('err');
      console.log(error);
      this.isLoading = false;
      })
      .finally(() =>{
        alert('fin');
        if (this.posts && this.posts.length <= 0){
          this.hasPosts = true;
        }
        this.isLoading = false;
        
      });
      

  }
}
