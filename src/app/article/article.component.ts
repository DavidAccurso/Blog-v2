import { Component, OnInit, Input, Output } from '@angular/core';
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';

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
  post: IPost;
  public id: number;

  @Input()
  public articlePost: IPost;

  constructor(
    private postService: PostService
  ) { }
  ngOnInit() {
    this.post = this.articlePost;
    if (this.post) {
      this.id = this.post.id;
    }
  }
}
