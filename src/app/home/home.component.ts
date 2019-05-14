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
  hasPosts = false;
  isLoading: boolean;
  selectedPost: Post;

  constructor(
    public postService: PostServiceComponent
  ) {}

  ngOnInit() {
    this.loadPosts();
    // if (this.posts) {
    //   this.selectedPost = this.posts[0];
    // } else {

    // }
  }
  public setSelectedPost(id: number): void {
    this.selectedPost = this.posts.filter(w => { w.ID === id })[0];
  }
  private loadPosts(): void {
    this.isLoading = true;
    this.posts = this.postService.GetAllPosts();
    // this.postService.getPosts()
    // .then(po => {
    //   this.posts = po;
    //   console.log(po);
    // })
    // .catch(error => {
    //   console.log(error);
    //   })
    // .finally(() => {
    //     if (this.posts && this.posts.length <= 0) {
    //       this.hasPosts = true;
    //     }
    //     this.isLoading = false;
    //   });
  }
}
