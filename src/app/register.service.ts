import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(userData):Observable<any>{
    return this.http.post('https://dressup05.herokuapp.com/api/register', userData)
  }
}
 