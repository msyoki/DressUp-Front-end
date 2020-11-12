import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = 'https://dressup05.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products/`);
  }
}
