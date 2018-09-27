import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// rutas
import {HomePageComponent} from '../app/component/home-page/home-page.component';
import {LoginPageComponent} from '../app/component/login-page/login-page.component';
import {PrivadoPageComponent} from '../app/component/privado-page/privado-page.component';
import {RegisterPageComponent} from '../app/component/register-page/register-page.component';
import {NotFoundPageComponent} from '../app/component/not-found-page/not-found-page.component';


const routes: Routes = [
   {path: '', component: HomePageComponent},
   {path: 'login', component: LoginPageComponent},
   {path: 'register', component: RegisterPageComponent},
   {path: 'privado', component: PrivadoPageComponent},
   {path: '**', component: NotFoundPageComponent}
  // {path: 'pdf', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

