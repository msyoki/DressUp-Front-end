import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../landing-page/products';

@Injectable({
  providedIn: 'root'
})
export class LadiesProductsService {
  API_URL = 'https://dressup05.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/search/ladies/`);
  }
}
