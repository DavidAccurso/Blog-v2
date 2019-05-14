import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.scss']
})
@Injectable()
export class AuthorServiceComponent {

  constructor(private http: HttpClient) { }

  public getInfo(id: number): string {
      return 'INFO DEL AUTHOR HARDCODEADAA POR QUE NO TENGO INTERNET SOY POBRE :(';
  }
  public getImg(id: number): string {
    return '../assets/apu.jpg';
  }
}
