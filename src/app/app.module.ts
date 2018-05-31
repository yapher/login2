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
import { AplicComponent } from './component/pagina/aplic/aplic.component';
import { MyDatePickerModule } from 'mydatepicker';

//servicios
import { ServiceInquilinoService } from './services/service-inquilino.service';

//ajax
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';


// buscadores

import {FiltroInquilinosPipe} from './component/inquilinos/filtrarInquilino';


//google maps
import { AgmCoreModule } from '@agm/core';
import { Submenu1Component } from './component/pagina/submenu1/submenu1.component';
import { PdfComponent } from './component/aplicaciones/pdf/pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NewPersonComponent } from './component/inquilinos/new-person/new-person.component';



@NgModule({
  declarations: [
    AppComponent,
    FiltroInquilinosPipe,
    HeaderComponent,
    HomeComponent,
    ListadoComponent,
    NuevoComponent,
    AplicComponent,
    Submenu1Component,
    PdfComponent,
    NewPersonComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    PdfViewerModule,
    SlimLoadingBarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVA8B_hlnYoHWH6I0FtcuMIFwDifHHTe0'
    })
  ],
  providers: [ServiceInquilinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
