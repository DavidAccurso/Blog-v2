import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notFound',
  templateUrl: './notFound.component.html',
  styles: []
})
export class notFoundComponent implements OnInit {

  constructor() { 
    this.imgPath = '../../assets/douh.png';
  }

  ngOnInit() {
  }
  
  private _imgPath : string;
  public get imgPath() : string {
    return this._imgPath;
  }
  public set imgPath(v : string) {
    this._imgPath = v;
  }
  
}
