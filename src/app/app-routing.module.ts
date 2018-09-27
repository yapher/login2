import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// rutas


const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'header', component: HeaderComponent},
  // {path: 'listado', component: ListadoComponent},
  // {path: 'new-person', component: NewPersonComponent},
  // {path: 'nuevo', component: NuevoComponent},
  // {path: 'pdf', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

