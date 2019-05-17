import { Component, OnInit, Input,
  OnChanges, SimpleChange,
  SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostService } from '../post-service/post-service';
import { IPost } from '../IPost';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  constructor(

    private activatedRoute: ActivatedRoute,
    private service: PostService) 
    {
      // activatedRoute.paramMap
      // .toPromise()<Number>
      // .then(a => {
      //   this.postId = a;
      // })   
    }

   @Input()
   public id: number;
  postId: number;
  post: IPost;
  isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;

    this.service.getPost(this.id)
    .then(p => {
      this.post = p;
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() =>{
      this.isLoading = false;
    })
    console.log(this.post);
  }
  public ngOnChanges(changes: SimpleChanges): void{
    // Cada vez que cambie un input 
  }
}
