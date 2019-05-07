import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { PostServiceComponent } from '../post-service/post-service.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public postService : PostServiceComponent
  ) { }

  ngOnInit() {
    this.title = "Primero";
    this.title = this.postService.nombre;
  }
  
  title: string;
  
}
