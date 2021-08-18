import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var M: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService] //importarse
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/home']);
    }
  }

  signIn(form?: NgForm){
    if(form){
      this.authService.signIn(form.value).subscribe(
        response => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home'])
        },
        err =>{
          M.toast({html: err.error});
        }
      )
    }
  }

}
