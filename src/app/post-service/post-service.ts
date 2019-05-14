import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../IPost';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  urlPosts: string = 'https://jsonplaceholder.typicode.com/posts/';
  urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  urlPhotos: string = 'https://jsonplaceholder.typicode.com/photos';
  post: IPost[];

  public getPost(d: number): Promise<IPost> {
     return this.http.get<IPost>(`${this.urlPosts}/${d}`).toPromise();
  }

  public GetAllPosts(): Promise<IPost[]> {
    return this.http.get<IPost[]>(this.urlPosts).toPromise();
  }

 public GetAllPostsFromAuthor(authorID: number): IPost[] {
  let authorPosts: IPost[];
  // authorPosts = this.GetAllPosts();
  return authorPosts.filter(p => { p.userId === authorID });
  }
}
