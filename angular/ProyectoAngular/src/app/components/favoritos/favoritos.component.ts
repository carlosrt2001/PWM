import { Component, Injectable, OnInit } from '@angular/core';
import { Snk } from 'src/app/app';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class FavoritosComponent implements OnInit {

  snk: Snk[];

  constructor(private fireService: FireService) {
    this.snk = [{
      name: 'Prueba de sitio',
      id: 'Esto es una prueba',
      nombre:"ER",
      precio: "40",
      url: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }, {
      name: 'De sitio',
      nombre:"Es",
      id: 'Esto es una prueba',
      precio: "40",
      url: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }
    ];
  }

  ngOnInit(): void {
    this.fireService.getSnk().subscribe(items => {
      console.log(items);
      this.snk = items
    });
    
  }
}