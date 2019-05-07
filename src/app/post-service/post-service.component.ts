import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.scss']
})
@Injectable()
export class PostServiceComponent {

  constructor() { }

  public nombre: string = 'Davi';
}
