import { Component, OnInit, Input,
  OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';
import { IAutores } from '../IAutores';
import { AuthorService } from '../post-service/author-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService,
    private authorService: AuthorService
    ) 
    { }

   @Input()
  public id: number;
  postId: number;
  post: IPost;
  author: IAutores;
  isLoadingAuthor: boolean;
  isLoading: boolean;
  hasPost = false;
  imgPath: string = '../../assets/paisaje.jpg';
  date: number = Date.now();
  private sub: any;

  ngOnInit() {
    this.isLoading = true;

    this.sub = this.activeRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });
    if(this.id){
       this.getPost(this.id);
    }
    console.log(this.post);
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
    });
    if (this.post){
      this.hasPost = true;
      this.getAuthor();
    }
  }
  private getAuthor(): void {
    this.isLoadingAuthor = true;
    this.authorService.getAutor(this.post.userId).then(author =>{
      this.author = author;
    })
  }
}
