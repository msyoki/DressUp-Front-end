import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/landing-page/products';
import { JuniorProductsService } from '../junior-products.service';

@Component({
  selector: 'app-junior-products',
  templateUrl: './junior-products.component.html',
  styleUrls: ['./junior-products.component.css']
})
export class JuniorProductsComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private juniorProductsService:JuniorProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // tslint:disable-next-line: typedef
  public getProducts() {
    this.products =  this.juniorProductsService.getProducts();
  }

}

