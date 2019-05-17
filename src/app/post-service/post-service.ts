import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../IPost';


@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  urlPosts: string = 'https://jsonplaceholder.typicode.com/posts';
  urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  urlPhotos: string = 'https://jsonplaceholder.typicode.com/photos';

  public getPost(d: number): Promise<IPost> {
     return this.http.get<IPost>(`${this.urlPosts}/${d}`).toPromise();
  }

  public GetAllPosts(): Promise<IPost[]> {
    return this.http.get<IPost[]>(this.urlPosts).toPromise();
  }

  public getDaysAgo(): string{
    let _daysAgo: string;
    let _days: number = Math.round((Math.random() * 100));
    _daysAgo = `Publishied ${_days} ago.`;
    return _daysAgo;
  }
}
