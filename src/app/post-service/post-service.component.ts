import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModel, FormsModule } from '@angular/forms';
import { Post } from '../post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.scss']
})
@Injectable()
export class PostServiceComponent {

  constructor(private http : HttpClient) { }

  urlPosts: string = 'https://jsonplaceholder.typicode.com/posts/';
  urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  urlPhotos: string = 'https://jsonplaceholder.typicode.com/photos';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public GetAllPosts(): Post{

    // let receives[] = this.GetPostFromService();
    // let posts: Post[];

    // receives.forEach(element => {
    //   let p: Post = new Post();
    //   p.ID = 1;
    //   p.body = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';
    //   p.title = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    //   p.userId = 1;
    //   p.daysAgo = '21 days ago.';
    //   posts.push(p);
    // });
    let posts: Post[];
    let p: Post = new Post();
    p.ID = 1;
    p.body = 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto';
    p.title = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    p.userId = 1;
    p.daysAgo = '21 days ago.';
    // posts.push(p);
    return p;
    // return posts;
  }

  private GetPostFromService() {
    return this.http.get(this.urlPosts);
  }
}