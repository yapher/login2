import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// rutas
import { AppRoutingModule } from './app-routing.module';

// modulos
import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'mydatepicker';

// servicios
import { ServiceInquilinoService } from './services/service-inquilino.service';

// ajax
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [ServiceInquilinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
