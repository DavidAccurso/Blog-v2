import { Component, OnInit, Input, Output } from '@angular/core';
import { PostServiceComponent } from '../post-service/post-service.component';
import { Post } from '../post';
// import { Observable } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
// import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title = '';
  imgPath = '';
  daysAgo = '';
  text = '';
  post: Post;

  @Output()
  public articlePostId: number = 0;
  @Input()
  public selectedPost: Post;

  constructor(
    private postService: PostServiceComponent
  ) { }
  ngOnInit() {
    this.post = this.selectedPost; // this.postService.GetAllPosts()[0];
    if (this.post) {
      this.imgPath = '../assets/paisaje-2.jpg';
      this.title = this.post.title;
      this.daysAgo = this.post.daysAgo;
      this.text = this.post.body;
      this.articlePostId = this.post.ID;
    }
  }
}
