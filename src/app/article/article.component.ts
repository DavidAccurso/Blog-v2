import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PostComponent } from '../post'
import { Observable } from 'rxjs';
@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.title = "Titulo post 3";
  }

  ngOnInit() {
    this.getRestItems();

    this.imgPath = "../assets/paisaje-2.jpg";
    this.title = this.restItems['title'];
    this.daysAgo = "4 days ago";
    this.text = this.restItems['body'];
    this.text = "asddsadssdasda";
  }
  title: string;
  imgPath: string;
  daysAgo: string;
  text: string;
  posts$: Observable<PostComponent[]>;

  restItems: any;
  restItemsUrl = "https://jsonplaceholder.typicode.com/posts/1";

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems().subscribe(restItems => {
      this.restItems = restItems;
      console.log(this.restItems);
    });
  }
  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http.get<any[]>(this.restItemsUrl).pipe(map(data => data));
  }
}
