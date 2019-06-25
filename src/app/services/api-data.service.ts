import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http: HttpClient) { }

  getAllData() {
    const url = "https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos";
    return this.http.get<Data>(url);
  }
}
