import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient} from '@angular/common/http'
import { Product } from '../landing-page/products';

@Injectable({
  providedIn: 'root'
})
export class MenProductsService {
  API_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/search/men/`);
  }
}
