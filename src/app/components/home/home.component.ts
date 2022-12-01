import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsHomeList: any = []

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getProductsHome()
      .subscribe((response: any) => this.productsHomeList = response)
  }

}
