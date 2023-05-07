import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Snk } from './app';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private firestore: Firestore) { }

  getSnk(): Observable<Snk[]>{
    const aux = collection(this.firestore, 'items');
    return collectionData(aux, {idField: 'name'}) as Observable<Snk[]>;
    
  }
  

}
