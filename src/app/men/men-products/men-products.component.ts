import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/landing-page/products';
import { MenProductsService } from '../men-products.service'

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.css']
})
export class MenProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private menProductsService:MenProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

   // tslint:disable-next-line: typedef
  public getProducts() {
    this.products =  this.menProductsService.getProducts();
  }
}
