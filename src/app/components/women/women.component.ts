import { Component, OnInit } from '@angular/core';
import { ProductsWomenService } from 'src/app/services/products-women.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  productsList: any = [];

  constructor(private womenProductsService: ProductsWomenService) { }

  ngOnInit(): void {
    this.womenProductsService.getWomenProducts()
      .subscribe((response: any) => this.productsList = response);
  }
}
