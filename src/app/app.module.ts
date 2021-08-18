import { HttpClientModule } from '@angular/common/http'; //Importado
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //importacion
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; //importacion*
import { AppComponent } from './app.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { AuthGuard } from './auth.guard';//Fin de la importacion
import { UsersComponent } from './components/users/users.component';


//se importa forms y httpclient en imports
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    SensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
