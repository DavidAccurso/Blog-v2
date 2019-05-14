import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAutores } from '../IAutores';

@Injectable()
export class AuthorService {

  urlUsers: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getAutores() :  Promise<IAutores[]> {
    return this.http.get<IAutores[]>(this.urlUsers).toPromise();
  }
  public getInfo(id: number): string {
      return 'INFO DEL AUTHOR HARDCODEADAA POR QUE NO TENGO INTERNET SOY POBRE :(';
  }
  public getImg(id: number): string {
    return '../assets/apu.jpg';
  }
}
