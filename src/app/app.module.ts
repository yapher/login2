import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import { AppRoutingModule } from './app-routing.module';

//modulos
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/pagina/header/header.component';
import { HomeComponent } from './component/pagina/home/home.component';
import { ListadoComponent } from './component/inquilinos/listado/listado.component';
import { NuevoComponent } from './component/inquilinos/nuevo/nuevo.component';

//servicios
import { ServiceInquilinoService } from './services/service-inquilino.service';

//ajax
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


// buscadores

import {FiltroInquilinosPipe} from './component/inquilinos/filtrarInquilino';


//google maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    FiltroInquilinosPipe,
    HeaderComponent,
    HomeComponent,
    ListadoComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SlimLoadingBarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVA8B_hlnYoHWH6I0FtcuMIFwDifHHTe0'
    })
  ],
  providers: [ServiceInquilinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
