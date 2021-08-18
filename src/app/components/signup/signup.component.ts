import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var M: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp(form?: NgForm){
    if(form){
      this.authService.signUp(form.value).subscribe(
        response=>{
          localStorage.setItem('token', response.token);
          M.toast({html: 'Bienvenido'});
          this.router.navigate(['/home']);
        },
        err =>{
          M.toast({html: err});
        }
      )
    }
  }

}
