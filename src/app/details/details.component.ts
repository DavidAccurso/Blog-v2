import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PostServiceComponent } from '../post-service/post-service.component';
import { Post } from '../post';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnChanges {

  constructor(
    private activatedRoute : ActivatedRoute,
    private service: PostServiceComponent) {
    let id: number;
    // activatedRoute.paramMap.toPromise()<number>.then(a => {
    //   this.id = a;
    // })
   }

   @Input()
   public id: number;

  post: Post;
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
