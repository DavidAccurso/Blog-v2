import { Component, OnInit, Input,
  OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';
import { IAutores } from '../IAutores';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  constructor(

    private activeRoute: ActivatedRoute,
    private service: PostService) 
    {
      // this.postId = parseInt(activatedRoute.snapshot.paramMap.get('id'));
    }

   @Input()
  public id: number;
  postId: number;
  post: IPost;
  author: IAutores;
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
  public ngOnChanges(changes: SimpleChanges): void{
    // Cada vez que cambie un input 
  }

  private getPost(id: number) {
    this.isLoading = true;
    this.service.getPost(this.id)
    .then(returnedPost => {
      this.post = returnedPost;
      // this.author = this.aut
      this.post.daysAgo = this.service.getDaysAgo();
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
