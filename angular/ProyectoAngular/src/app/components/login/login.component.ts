import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario.model';
/*
import { HttpClient } from '@angular/common/http';
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensaje=""
  registrado = false;

  constructor(){}
  /*
  constructor(private httpClient: HttpClient){}
  */
  

  persona:Usuario[] = [];

  agregarUsuario(){
    let miUsuario= new Usuario(this.cuadroNombre, this.cuadroApellidos,this.cuadroNick, this.cuadroCorreo, this.cuadroTelefono, this.cuadroClave)
    this.persona.push(miUsuario);
  }
  

  cuadroNombre:string=""
  cuadroApellidos:string="";;
  cuadroNick:string="";
  cuadroCorreo:string="";
  cuadroTelefono:string="";
  cuadroClave:string="";

/*
  guardarpersona(auxiliar:String){
    this.httpClient.post('https://console.firebase.google.com/u/0/project/pwm-bd/database/pwm-bd-default-rtdb/data/~2F?hl=es/datos.json', auxiliar)
  }
*/
}
