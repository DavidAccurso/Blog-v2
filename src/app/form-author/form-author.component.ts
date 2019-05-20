import { Component, OnInit } from '@angular/core';
import { IAutores } from '../IAutores';
import { AuthorService } from '../post-service/author-service';
import { PostService } from '../post-service/post-service';
import { Post } from '../Post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formauthor',
  templateUrl: './form-author.component.html',
  styleUrls: ['./form-author.component.scss']
})
export class FormAuthorComponent implements OnInit {

  public autores: IAutores[];
  public autorID: number;
  public submitted: boolean = false;
  public ngForm: FormGroup;

  get nombre(): any {
    return this.ngForm.get('nombre');
  }
  get usuario(): any {
    return this.ngForm.get('usuario');
  }
  get email(): any {
    return this.ngForm.get('email');
  }

  constructor(
    private authorService: AuthorService,
    private postService: PostService,
    private toastr: ToastrService
    ) {
      this.initializeForm();
   }

  ngOnInit() {
    this.authorService.getAutores().then(a => {
      this.autores = a;
    });
  }

  initializeForm() {
    this.ngForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  onSubmit() {
    const post = new Post(1, this.postService.getLastId() ,
    this.ngForm.get('titulo').value, this.ngForm.get('contenido').value, 'han pasado 84 años');

    const pusheo = this.postService.pushPost(post);
    if (pusheo) {
      this.showSuccess();
    } else {
      this.showError('le pifiaste amigo :(');
    }
  }

  showSuccess() {
    this.toastr.success('Agregado con exito :)', 'YEAH!', { timeOut: 10000 });
  }

  showError(error: string = 'void'): void {
    this.toastr.error('Error with: ' + error, 'WHATDAFACK');
  }
}
