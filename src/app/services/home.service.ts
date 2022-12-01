import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getProductsHome() {
    return this.http.get('https://jhonatan0912.github.io/ADIDAS-API/home.json')
  }
}
