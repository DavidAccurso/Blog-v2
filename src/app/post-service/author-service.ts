import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAutores } from '../IAutores';

@Injectable()
export class AuthorService {

  urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  listaLocalAutores: IAutores[] = [];
  lastId: number = 30;

  constructor(private http: HttpClient) { }

  public getAutores() :  Promise<IAutores[]> {
    return this.http.get<IAutores[]>(this.urlUsers).toPromise().then(autores => {
      return autores.concat(this.listaLocalAutores);
    })
  }
  public getInfo(id: number): string {
      return 'INFO DEL AUTHOR HARDCODEADAA POR QUE NO TENGO INTERNET SOY POBRE :(';
  }
  public getImg(id: number): string {
    return '../assets/apu.jpg';
  }
  public getLastId() {
    return this.lastId + 1;
  }
  public pushAuthor(author: IAutores): boolean {
    try {
      this.listaLocalAutores.push(author);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
