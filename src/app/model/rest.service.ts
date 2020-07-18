import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product }    from './product.model';
import { Category } from './category.model';
import { Order } from './order.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl: string = "http://localhost:3500/";
  token: string  = "";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]> (this.baseUrl + 'categories');
  }

  saveOrder(order: Order):Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  authentication(username: string, password: string):Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'ligin', {
      username:username,
      pasword:password
    }).pipe( map( response => {
      this.token = response.success ? response.token : null;
      console.log(this.token);
      return response.success;
    } ) );
  }

}
