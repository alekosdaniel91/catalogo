import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Data, User } from '../models/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  public product: Data;
  public id:number=0;
  userCollection: AngularFirestoreCollection<User>;
  users:Observable<User[]>
  
  constructor(private http: HttpClient, private storage: AngularFireStorage, private afs:AngularFirestore) {
    this.userCollection = afs.collection<User>('users', ref => ref.orderBy('fecha', 'desc'));
    this.users= afs.collection('users').valueChanges();
   }

  getAllData() {
    let url = "https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos";
    return this.http.get<Data>(url);
  }
  getProductID(product:Data) {
    return (this.product=product)
  }
  setProductID() {
    return this.product    
  }
  public upLooad(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
  getUser() {
    return this.users
  }
  addUser(user:User) {
    console.log('NEW User');
    this.userCollection.add(user);
  }
}
