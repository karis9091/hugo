import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';//importado

import { HomeComponent } from './components/home/home.component'; //importada
import { SensorComponent } from './components/sensor/sensor.component'; //importado
import { SigninComponent } from './components/signin/signin.component'; //importado
import { SignupComponent } from './components/signup/signup.component'; //importado
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'sensor', component: SensorComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
