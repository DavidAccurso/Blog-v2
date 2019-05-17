import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../IPost';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';
  urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  urlPhotos: string = 'https://jsonplaceholder.typicode.com/photos';
  posts: IPost[] = [];
  lastId: number = 100;

  public getPost(d: number): Promise<IPost> {
    //  return this.http.get<IPost>(`${this.urlPosts}/${d}`).toPromise();
    return this.http.get<IPost>(`${this.urlPosts}/${d}`)
    .toPromise<IPost>().then(posts => {
      if(!posts) {
        return this.posts.filter(p => {
          p.id === d
        })[0];
      } else {
        return posts;
      }
    })
  }

  public GetAllPosts(): Promise<IPost[]> {
    return this.http
    .get<IPost[]>(this.urlPosts)
    .toPromise()
    .then(po => {
      return po.slice(0,3).concat(this.posts);
    })
  }

  public getDaysAgo(): string{
    let _daysAgo: string;
    let _days: number = Math.round((Math.random() * 100));
    _daysAgo = `Publishied ${_days} ago.`;
    return _daysAgo;
  }

  public pushPost(_post: IPost): boolean{
    try {
      _post.id = this.getLastId();
      this.posts.push(_post);
      return true;
    } catch (error) {
      return false;
    }
  }
  public getLastId(): number {
    this.lastId = this.lastId + 1;
    return this.lastId;
  }
}
