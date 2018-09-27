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
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { PrivadoPageComponent } from './component/privado-page/privado-page.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent
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
