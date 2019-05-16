import { Component, OnInit } from '@angular/core';
import { IAutores } from '../IAutores';
import { AuthorService } from '../post-service/author-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public autores: IAutores[];
  public autorID: number;
  public titulo: string;
  public contenido: string;
  public selectedAutor: IAutores;

  constructor(
    private authorService: AuthorService
  ) { }
  
  ngOnInit() {
    this.authorService.getAutores().then(a => {
      this.autores = a;
    })
  }
  onSubmit(){
  
  }
}
