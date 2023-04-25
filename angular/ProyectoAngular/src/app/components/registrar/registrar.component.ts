import { Component, Injectable, OnInit } from '@angular/core';
//import { DataServices } from 'src/app/data.services';
import { Usuario } from '../..//usuario.model';
//import { UsuarioServices } from 'src/app/usuario.services';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

@Injectable()
export class RegistrarComponent{
  mensaje=""
  registrado = false;
  correo= "";
  clave= "";
  
  constructor(){}
  //constructor(private usuarioService: UsuarioServices, private dataService: DataServices){}


  persona:Usuario[] = [
    new Usuario("diego", "cedres", "Nick", "correo1", "telefono1", "miclave"),
    new Usuario("juan", "cedres", "Nick", "correo1", "telefono1", "miclave"),
    new Usuario("pedro", "cedres", "Nick", "correo1", "telefono1", "miclave"),
    new Usuario("carlos", "cedres", "Nick", "correo1", "telefono1", "miclave"),
  ];

  
  agregarUsuario(){
    let miUsuario= new Usuario(this.cuadroNombre, this.cuadroApellidos, this.cuadroNick, this.cuadroCorreo, this.cuadroTelefono, this.cuadroClave);
    this.persona.push(miUsuario);
    //this.agregarUsuarioServicio(miUsuario);
    //this.dataService.guardarRegistro(this.persona);
  }

  
  cuadroNombre:string=""
  cuadroApellidos:string="";;
  cuadroNick:string="";
  cuadroCorreo:string="";
  cuadroTelefono:string="";
  cuadroClave:string="";


}
