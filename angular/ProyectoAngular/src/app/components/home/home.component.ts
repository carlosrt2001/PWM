import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  recomendados:String
  populares:String
  lista:String[]= []


  constructor(){
    this.recomendados="Articulos Recomendados"
    this.populares="Ventas Populares"
    
  }

  ngOnInit() {
    this.lista.push("../../../assets/adidas.jpeg")
    this.lista.push("../../../assets/nike.jpeg")
    this.lista.push("../../../assets/north face.jpeg")
    this.lista.push("../../../assets/nike-2.jpeg")
  }

}
