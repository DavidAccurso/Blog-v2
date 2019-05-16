import { Component, OnInit, Input, Output } from '@angular/core';
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title = 'default Title';
  imgPath = '../../assets/defaultUser.jpg';
  daysAgo = '21 days ago.';
  text = 'Lorem Impsumasdaskdjasdlkadslkasdkjaskljadsk';
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
