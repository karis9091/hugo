import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'; //esta sentencia nos va a ayudar a permitir tener comunicacion con la api
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUser: Users;  //en esta variable se esta guardando los usuarios seleccionados y se usara para editar, cargar los datos de un usuario 
  users: Users[]; // creo la variable con el arreglo del usuario en model
  readonly URL_API = 'https://user9091.herokuapp.com/api/users';

  constructor(private http: HttpClient) { 
    this.selectedUser = new Users();
    this.users = []; //lo esta inicializando vacio
  }
    //Metodos
  getUsers(){
    return this.http.get(this.URL_API);
  }

  postUser(user: Users){
    return this.http.post(this.URL_API, user);
  }

  putUser(user: Users){
    return this.http.put(this.URL_API + `/${user._id}`, user); 
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);

}
}
