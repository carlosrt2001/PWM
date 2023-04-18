import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
  ayuda:String
  nosotros:String
  contacto:String
  iniciar:String
  registrarse:String
  hombre:String
  mujer:String

  constructor(){
    this.ayuda = "Ayuda"
    this.nosotros = "Sobre Nosotros"
    this.contacto = "Contacto"
    this.iniciar = "Iniciar Sesion"
    this.registrarse = "Registrarse"
    this.hombre = "Hombre"
    this.mujer = "Mujer"
    

  }
  
}


