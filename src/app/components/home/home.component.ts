import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';//importado
import { AuthService } from 'src/app/services/auth.service';//importado

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService] //importado
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }//importa el router y auth aqui

  ngOnInit(): void {
  }

  logout(){
    //ejecuta el metodo logout de authservice
    this.authService.logOut();
  }
}
