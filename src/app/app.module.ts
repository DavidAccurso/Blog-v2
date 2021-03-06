import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoresComponent } from './autores/autores.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { notFoundComponent } from './Shared/notFound/notFound.component';
import { PostService } from './post-service/post-service';
import { FormsModule } from '@angular/forms';
import { AuthorService } from './post-service/author-service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAuthorComponent } from './form-author/form-author.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    DetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    AboutComponent,
    notFoundComponent,
    FormComponent,
    FormAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    PostService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
