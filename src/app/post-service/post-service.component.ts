import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { NgModel, FormsModule } from '@angular/forms';
import { Post } from '../post';

// let httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.scss']
})
@Injectable()
export class PostServiceComponent {

  constructor(private http: HttpClient) { }

  urlPosts: string = 'https://jsonplaceholder.typicode.com/posts/';
  urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  urlPhotos: string = 'https://jsonplaceholder.typicode.com/photos';


  public GetPost(): Post {

    const receives = this.GetPostFromService();
    const p: Post = new Post();
    p.ID = 1;
    p.body = `quia et suscipit
      suscipit recusandae consequuntur expedita et cum
      reprehenderit molestiae ut ut quas totam
      nostrum rerum est autem sunt rem eveniet architecto`;
    p.title = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    p.userId = 1;
    p.daysAgo = '21 days ago.';
    return p;
  }
  public GetAllPosts(): Post[] {
    return this.GetPostFromService();
  }

  private GetPostFromService(): Post[] {
    const posts: Post[] = [];
    this.getPosts().then(p => {
      p.forEach(pos => {
        posts.push(pos);
      });
    })
    .catch(err => {
      return null;
    });
    return posts;
  }

  private GetUsersFromService() {
    const a = this.http.get(this.urlUsers);
    console.log(a);
    return a;
  }

  public getPost(d: number): Promise<Post> {
     return this.http.get<Post>(`${this.urlPosts}/${d}`).toPromise();
  }

  public getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(this.urlPosts).toPromise();
 }

 public GetAllPostsFromAuthor(authorID: number): Post[] {
  let authorPosts: Post[];
  authorPosts = this.GetAllPosts();

  return authorPosts.filter(p => { p.userId === authorID });
  }
}
