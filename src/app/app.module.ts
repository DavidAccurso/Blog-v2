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
    notFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
