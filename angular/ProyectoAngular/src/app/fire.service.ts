import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { App } from './app';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firestore: Firestore) { }

  getSnk(): Observable<App[]>{
    const aux = collection(this.firestore, 'items');
    return collectionData(aux, {idField: 'id'}) as Observable<App[]>;
    
  }
  

}
