import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsWomenService {

  constructor(private http: HttpClient) { }

  getWomenProducts() {
    return this.http.get('https://jhonatan0912.github.io/ADIDAS-API/women.json')
  }
}
