import { Component, OnInit } from '@angular/core';
import { ProductsKidsService } from 'src/app/services/products-kids.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  productsList: any = [];

  constructor(private kidsProductService: ProductsKidsService) { }

  ngOnInit(): void {
    this.kidsProductService.getKidsProducts()
      .subscribe((response: any) => this.productsList = response);
  }

}
