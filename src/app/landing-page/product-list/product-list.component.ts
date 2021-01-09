import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

import { Product } from '../products';
@Component({
  selector: 'app-product-list',
  
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor( private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // tslint:disable-next-line: typedef
  public getProducts() {
    this.products$ = this.productsService.getProducts();
  }

}
