import { Component, OnInit } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs/operators";
import { PostServiceComponent } from '../post-service/post-service.component';
import { Post } from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  // constructor(private http: HttpClient) {
  //   this.title = "Titulo post 3";
  // }
  title: string;
  imgPath: string;
  daysAgo: string;
  text: string;
  posts$: Observable<Post[]>;
  post: Post;

  constructor(
    public postService: PostServiceComponent
  ) {
    this.post = postService.GetAllPosts();
   }
  ngOnInit() {
    // this.getRestItems();
    const p: Post = this.post;
    this.imgPath = '../assets/paisaje-2.jpg';
    this.title = p.title;
    this.daysAgo = p.daysAgo;
    this.text = p.body;
  }



  // restItems: any;
  // restItemsUrl = "https://jsonplaceholder.typicode.com/posts/1";

  // // Read all REST Items
  // getRestItems(): void {
  //   this.restItemsServiceGetRestItems().subscribe(restItems => {
  //     this.restItems = restItems;
  //     console.log(this.restItems);
  //   });
  // }
  // // Rest Items Service: Read all REST Items
  // restItemsServiceGetRestItems() {
  //   return this.http.get<any[]>(this.restItemsUrl).pipe(map(data => data));
  // }
}
