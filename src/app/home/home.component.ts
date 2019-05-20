import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'del curso de Angular.'
  posts: IPost[];
  hasPosts = false;
  isLoading: boolean;
  imgLoading = '../../assets/loading.gif';
  selectedPost: IPost;

  constructor(
    public postService: PostService
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.isLoading = true;
    this.postService.GetAllPosts()
    .then(p => {
      this.posts = p;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() =>{
      this.isLoading = false;
    })
  }
}
