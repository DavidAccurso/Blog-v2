import { Component, OnInit } from '@angular/core';
import { IAutores } from '../IAutores';
import { AuthorService } from '../post-service/author-service';
import { PostService } from '../post-service/post-service';
import { Post } from '../Post';

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
    private authorService: AuthorService,
    private postService: PostService
  ) { }
  
  ngOnInit() {
    this.authorService.getAutores().then(a => {
      this.autores = a;
    })
  }
  onSubmit(){
    let _post = new Post(1,50,this.titulo, this.contenido, 'han pasado 84 años'); 
    let pusheo = this.postService.pushPost(_post);
    if (pusheo) {
      alert('Agregad con exito')
    } else {
      alert('ERRORR!');
    }
  } 
}
