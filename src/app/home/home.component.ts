import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  title: string = "BLOG!";
}
