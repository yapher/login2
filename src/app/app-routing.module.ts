import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas
import { HeaderComponent } from './component/pagina/header/header.component';
import { HomeComponent } from './component/pagina/home/home.component';
import { ListadoComponent } from './component/inquilinos/listado/listado.component';
import { NuevoComponent } from './component/inquilinos/nuevo/nuevo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'nuevo', component: NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
