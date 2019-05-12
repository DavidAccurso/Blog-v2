import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostServiceComponent } from '../post-service/post-service.component';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  constructor(
    private postService : PostServiceComponent
  ) { 
    this.imgPath = "../assets/apu.jpg";
  }

  ngOnInit() {
    // this.authorPosts = this.postService.GetAllPostsFromAuthor(1);
  }
  imgPath: string;
  authorPosts: Post[];

}
