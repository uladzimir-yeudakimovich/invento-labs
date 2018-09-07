import { Injectable } from '../../node_modules/@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("src/assets/data.json");
  }
}
