import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    //segundo, cuando init compo
    setTimeout(() =>
    this.dav = "pasaron 5 from ngOnInit", 5000)
  }
  constructor() {
    //Primero

    setTimeout(() =>
    this.dav = "pasaron 10 from Constr", 10000)
  }
  
  title = 'Blog';
  texto : string = 'dada dada da';
  dav :string = 'hol';
}
