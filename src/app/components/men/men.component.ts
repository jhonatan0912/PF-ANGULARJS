import { Component, OnInit } from '@angular/core';
import { ProductsMenService } from 'src/app/services/products-men.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  productsList: any = [];

  constructor(private menProductsService: ProductsMenService) { }

  ngOnInit(): void {
    this.menProductsService.getMenProducts()
      .subscribe((response: any) => this.productsList = response);
  }

}
