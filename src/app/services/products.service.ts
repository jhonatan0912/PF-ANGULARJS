import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    console.log('http service');
  }

  getProducts(): any {
    return this.http.get('https://jhonatan0912.github.io/PF-ADVANCED-JS/products.json')
  }
}
