import { Component, OnInit, Input, Output } from '@angular/core';
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title: string;
  imgPath = '../../assets/defaultUser.jpg';
  daysAgo = '21 days ago.';
  text: string;
  post: IPost;
  public id: number;
  public isLoading: boolean = false;

  @Input()
  public postId: number;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    if (this.postId) {
      this.id = this.postId;

      this.postService.getPost(this.id)
      .then(returnedPost => {
        this.post = returnedPost;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });

      // this.getPost(this.id);
    }
  }

  private getPost(id: number) {


  }
}
