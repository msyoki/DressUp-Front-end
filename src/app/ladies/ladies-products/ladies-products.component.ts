import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/landing-page/products';
import { LadiesProductsService } from '../ladies-products.service';

@Component({
  selector: 'app-ladies-products',
  templateUrl: './ladies-products.component.html',
  styleUrls: ['./ladies-products.component.css']
})
export class LadiesProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private ladiesProductsService: LadiesProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // tslint:disable-next-line: typedef
  public getProducts() {
    this.products$ =  this.ladiesProductsService.getProducts();
  }

}
