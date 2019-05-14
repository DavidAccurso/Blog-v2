import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  posts: IPost[];
  hasPosts = false;
  isLoading: boolean;
  selectedPost: IPost;

  constructor(
    public postService: PostService
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  // public setSelectedPost(id: number): void {
  //   this.selectedPost = this.posts.filter(w => { w.ID === id })[0];
  // }

  private loadPosts(): void {
    this.isLoading = true;
    this.postService.GetAllPosts().then(p => {
      this.isLoading = false;
      this.posts = p.slice(0,5);
    })
    .catch(er => {
      alert('ERROR');
    })
    .finally(() =>{
      this.isLoading = false;
    })
  }
}
