import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImsServicesService {
  databaseURL = 'http://localhost:8080';
  id;
  constructor(private http: HttpClient) { }

    //add new product 
    addNewProduct(data) {
      return this.http.post(`${this.databaseURL}/addProduct`, data);
    }

      //get all product-info 
  getProductInfo(): Observable<any> {
    return this.http.get<any>(`${this.databaseURL}/getAllProducts`);
  }
}
