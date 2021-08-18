import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  selectedUser: Users;
  users: Users[];
  readonly URL_API = 'https://user9091.herokuapp.com/api/users';

  constructor(private http: HttpClient) {
    this.selectedUser = new Users();
    this.users = [];
  }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  postUsers(user: Users){
    return this.http.post(this.URL_API, user)
  }

  putUsers(user: Users){
    //para concatenar la id se usaron las comillas ` un signo de dollar y brackets
    //Dentro de los brackets la variable que se enviara, fuera de eso los datos del usuario
    return this.http.put(this.URL_API + `/${user._id}`, user)
  }
  //Como aqui no se actualizaran datos, se puede poner unicamente el id
  deleteUsers(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
