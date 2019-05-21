import { Component, OnInit } from '@angular/core';
import { IAutores } from '../IAutores';
import { AuthorService } from '../post-service/author-service';
import { PostService } from '../post-service/post-service';
import { Post } from '../Post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Autor } from '../Autor';

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
    const nombre = this.ngForm.get('nombre').value;
    const email = this.ngForm.get('email').value;
    const usuario = this.ngForm.get('usuario').value;
    const author = new Autor(nombre, email, usuario, this.authorService.getLastId());

    const pusheo = this.authorService.pushAuthor(author);
    if (pusheo) {
      this.showSuccess();
    } else {
      this.showError('le pifiaste :(');
    }
  }

  showSuccess() {
    this.toastr.success('Agregado con exito :)', 'YEAH!', { timeOut: 10000 });
  }

  showError(error: string = 'void'): void {
    this.toastr.error('Error with: ' + error, 'WHATDAFACK');
    this.toastr.show
  }
}
