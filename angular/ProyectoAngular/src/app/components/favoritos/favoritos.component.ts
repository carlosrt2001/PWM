import { Component, Injectable, OnInit } from '@angular/core';
import { App } from 'src/app/app';
import { Firestore } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  snk: App[];

  constructor(private fireService: FireService) {
    this.snk = [{
      name: 'Prueba de sitio',
      id: 'Esto es una prueba',
      precio: "40",
      url: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }, {
      name: 'Prueba de sitio',
      id: 'Esto es una prueba',
      precio: "40",
      url: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }
    ];
  }

  ngOnInit(): void {
    this.fireService.getSnk().subscribe(places => {
      this.snk = places;
    });
    
  }
}