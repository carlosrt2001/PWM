import { Component, Injectable, OnInit } from '@angular/core';
import { Usuario } from '../..//usuario.model';
import { UsuarioServices } from 'src/app/usuario.services';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

@Injectable()
export class RegistrarComponent implements OnInit{
  
  
  
  constructor(private usuarioService: UsuarioServices){}

  ngOnInit(): void {
    //this.persona = this.usuarioService.persona;
    this.usuarioService.obtenerUsuario().subscribe(misUsuarios=> {

      //console.log(misUsuarios);

      this.persona = Object.values(misUsuarios);
      
      this.usuarioService.setUsuario(this.persona)
    });

  }

 
  persona:Usuario[] = [];

  
  agregarUsuario(){
    let miUsuario= new Usuario(this.cuadroNombre, this.cuadroApellidos, this.cuadroNick, this.cuadroCorreo, this.cuadroTelefono, this.cuadroClave);
    this.usuarioService.agregarUsuarioServicio(miUsuario);
  }

  
  cuadroNombre:string=""
  cuadroApellidos:string="";;
  cuadroNick:string="";
  cuadroCorreo:string="";
  cuadroTelefono:string="";
  cuadroClave:string="";


}
