import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  public product: Data;
  public id:number=0;
  constructor(private http: HttpClient) {
   
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
  
}
