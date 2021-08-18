import { HttpClient } from '@angular/common/http';//importada
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; //importada
import { UsersComponent } from '../components/users/users.component';
import { Users } from '../models/users';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL = 'https://user9091.herokuapp.com/api/auth';
  user: Users;
  constructor(private http: HttpClient, private router: Router) {
    this.user = new Users();
   }

   signUp(user: any){
     return this.http.post<any>(this.URL + '/signup', user);
   }

   signIn(user: any){
     return this.http.post<any>(this.URL + '/signin', user);
   }

   loggedIn(){
     return !!localStorage.getItem('token');
   }

   getToken(){
     return localStorage.getItem('token');
   }

   logOut(){
     localStorage.removeItem('token');
     this.router.navigate(['/signin']);
   }
}
