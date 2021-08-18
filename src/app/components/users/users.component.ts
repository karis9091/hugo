import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { Users } from '../../models/users';

declare var M: any;
declare var CanvasJS: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsuariosService]
})
export class UsersComponent implements OnInit {

  constructor(public userService: UsuariosService) {
   }

  ngOnInit(): void {
    this.getUsers();
  }
  resetForm(form?: NgForm){
    if (form){
      form.reset();
    }
  }

  addUser(form: NgForm){
    
      if(form.value._id){
        this.userService.putUsers(form.value).subscribe(res=>{
          this.resetForm(form);
          M.toast({html: 'Usuario editado'});
          this.getUsers();
        });
      }else{
        delete form.value._id;
        this.userService.postUsers(form.value).subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Usuario agregado'});
          this.getUsers();
        });
      }
  }

  getUsers(){
    var admin = 0, op = 0, tech = 0, client = 0, security = 0;

    this.userService.getUsers().subscribe(res => {
      this.userService.users = res as Users[];

      for(var i = 0; i < this.userService.users.length; i ++){
        var user = this.userService.users as Users[];

        if(user[i].type == 1){
          admin++;
        } else if(user[i].type == 2){
          op++;
        } else if(user[i].type == 3){
          tech++;
        } else if(user[i].type == 4){
          client++;
        } else if(user[i].type == 5){
          security++;
        }
      }

      var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        exportEnable: true,
        animationEnable: true,
        title: {
          text: "Rangos de usuarios"
        },
        axisX: {
          title:"Rangos"
        },
        axisY: {
          title: "Total"
        },
        data: [{
          type: "column",
          startAngle: 25,
          toolTipContent: "<b>[label]</b>: {y}",
          indexLabelFontSize: 16,
          dataPoints: [
            { y: admin, label: "Administrador"},
            { y: op, label: "Operador"},
            { y: tech, label: "Tecnico"},
            { y: client, label: "Cliente"},
            { y: security, label: "Guardia"}
          ]
        }] 
      });
      
    });
  }
  updateUser(user: Users){
      this.userService.selectedUser = user;
    }

    deleteUser(_id: string){
      if(confirm('desea borrar este usuario?')){
        this.userService.deleteUsers(_id).subscribe(res=>{
          this.getUsers();
          M.toast({html: 'usuario eliminado'});
        });
      }
    }

    getUsersByNameAndEmail(){
      var searchText = (<HTMLInputElement>document.getElementById("searchInput")).value;
      if(searchText != ""){
        var filtered_array = this.userService.users.filter(function(value){
          return value.name.toUpperCase().includes(searchText.toUpperCase()) || value.email.toUpperCase().includes(searchText.toUpperCase());
        });
        this.userService.users = filtered_array as Users[];
      }else{
        this.getUsers();
      }
    }
}
  



