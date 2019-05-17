import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { notFoundComponent } from './Shared/notFound/notFound.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'autor',
    component: AutoresComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: notFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
