import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../IPost';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';
  localPosts: IPost[] = [];
  private lastId: number = 100;

  public getPost(id: number): Promise<IPost> {
    return this.http.get<IPost[]>(this.urlPosts).toPromise().then(autores => {
      return autores.slice(0,3)
      .concat(this.localPosts)
      .find(authorFiltrado => {
        return authorFiltrado.id === id
      });
    })
  }

  public GetAllPosts(): Promise<IPost[]> {
    return this.http
      .get<IPost[]>(this.urlPosts)
      .toPromise()
      .then(po => {
        return po.slice(0, 3).concat(this.localPosts);
      })
  }

  public getDaysAgo(): string {
    let _daysAgo: string;
    let _days: number = Math.round((Math.random() * 100));
    _daysAgo = `Publishied ${_days} days ago.`;
    return _daysAgo;
  }

  public pushPost(_post: IPost): boolean {
    try {
      _post.id = this.getLastId();
      this.localPosts.push(_post);
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
