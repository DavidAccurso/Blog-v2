import { Component, OnInit } from '@angular/core';
import { IAutores } from '../IAutores';
import { AuthorService } from '../post-service/author-service';
import { PostService } from '../post-service/post-service';
import { Post } from '../Post';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formauthor',
  templateUrl: './form-author.component.html',
  styleUrls: ['./form-author.component.scss']
})
export class FormAuthorComponent implements OnInit {

  public autores: IAutores[];
  public autorID: number;
  public titulo: string;
  public contenido: string;
  public selectedAutor: IAutores;
  public form: FormGroup;

  constructor(
    private authorService: AuthorService,
    private postService: PostService,
    private fb: FormBuilder
  ) {
      this.form = new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ])
      });
      this.form = this.fb.group({
        nombre: this.fb.control('', [
          Validators.required
        ])
      })
   }
  
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
    // para acceder al valor desde html this.form.get('nombre').value;
  } 
}
