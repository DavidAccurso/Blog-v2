import { Component, OnInit } from '@angular/core';
import { PostServiceComponent } from '../post-service/post-service.component';
import { Post } from '../post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title: string;
  imgPath: string;
  daysAgo: string;
  text: string;
  // posts:Post[];
  post: Post;

  constructor(
    public postService: PostServiceComponent
  ) { }
  
  ngOnInit() {
    this.post = this.postService.GetAllPosts()[0];
    const p: Post = this.post;
    this.imgPath = '../assets/paisaje-2.jpg';
    this.title = p.title;
    this.daysAgo = p.daysAgo;
    this.text = p.body;
    // this.postService.getPosts().then(_posts => {
    //   this.posts = _posts;
    // })
  }
}
