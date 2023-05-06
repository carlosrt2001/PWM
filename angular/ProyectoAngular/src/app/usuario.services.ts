import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Usuario } from "./usuario.model";


@Injectable()
export class UsuarioServices{
  
  constructor(private dataServices:DataServices){}


  setUsuario(misUsuarios:Usuario[]){
    this.persona=misUsuarios;
  }


  obtenerUsuario(){
    return this.dataServices.cargarRegistro();
  }


  persona:Usuario[] = [];



/*
  persona:Usuario[] = [
    new Usuario("diego", "cedres", "Nick", "correo1", "telefono1", "miclave"),
    new Usuario("juan", "cedres", "Nick", "correo1", "telefono1", "miclave"),
    new Usuario("pedro", "cedres", "Nick", "correo1", "telefono1", "miclave"),
    new Usuario("carlos", "cedres", "Nick", "correo1", "telefono1", "miclave"),
  ];

*/

  

  agregarUsuarioServicio(miUsuario:Usuario){
    this.persona.push(miUsuario);
    this.dataServices.guardarRegistro(this.persona);
  }

}


