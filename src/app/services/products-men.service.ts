import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsMenService {

  constructor(private http: HttpClient) { }

  getMenProducts() {
    return this.http.get('https://jhonatan0912.github.io/ADIDAS-API/men.json')
  }
}
