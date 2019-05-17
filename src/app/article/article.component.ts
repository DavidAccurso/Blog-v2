import { Component, OnInit, Input, Output } from '@angular/core';
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';
import { i18nPostprocess } from '@angular/core/src/render3';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title: string;
  imgPath = '../../assets/defaultUser.jpg';
  imgLoading = '../../assets/loading.gif';
  daysAgo = '21 days ago.';
  text: string;
  post: IPost;
  public id: number;
  public isLoading: boolean = false;
  public hasPost: boolean = false;

  @Input()
  public postId: number;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.hasPost = false;

    if (this.postId) {
      this.id = this.postId;
      this.getPost(this.id);
    } else {
      this.isLoading = false;
    }
  }

  private getPost(id: number) {
    this.isLoading = true;
    this.postService.getPost(this.id)
    .then(returnedPost => {
      this.post = returnedPost;
      this.post.daysAgo = this.postService.getDaysAgo();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      this.isLoading = false;
      if(this.post){
        this.hasPost = true;
      }
    });
  }


}
