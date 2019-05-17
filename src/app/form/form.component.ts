import { Component, OnInit } from '@angular/core';
import { IAutores } from '../IAutores';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  form: FormGroup;

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

  setFormGroup(): void {
    this.form = new FormGroup({
      'titulo': new FormControl("", [Validators.required]),
      'contenido': new FormControl("", [Validators.required])
    });
  }
}
