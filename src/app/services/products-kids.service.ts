import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsKidsService {

  constructor(private http: HttpClient) { }

  getKidsProducts() {
    return this.http.get('https://jhonatan0912.github.io/ADIDAS-API/kids.json')
  }
}
