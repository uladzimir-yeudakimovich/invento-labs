import { Injectable } from '../../node_modules/@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  public products = [];
  public localProducts = [];
  public model = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("src/assets/data.json");
  }

  setProduct(id) {
    this.products = [];
    this.http.get("src/assets/data.json").subscribe(dataFromServer => { 
      for (const key in dataFromServer['products']) {
        if (dataFromServer['products'][key].id !== id) {
          this.products.push(dataFromServer['products'][key]);
        }
      }
    });
    let body = JSON.stringify({products: this.products});
    console.log({products: this.products});
    return this.http.put("src/assets/data.json", body);
  }

  public updateProducts(product) {
    let body = JSON.stringify(product);
    // return this.http.put("src/assets/data.json", body);       /*for server*/
    return localStorage.setItem("products", body);              /*for localStorage*/
  }

  // public updateLocalProducts(id) {
  //   this.localProducts = [];
  //   let data = this.getLocalProduct();
  //   for (const key in data) {
  //     if (data.id !== id) {
  //       this.localProducts.push(data[key]);
  //     }
  //   }
  //   this.localProducts.forEach((n) => this.model.push(n)); 
  //   let body = JSON.stringify({products: this.model});
  //   // return this.http.put("src/assets/data.json", body);       /*for server*/
  //   console.log(localStorage.setItem("products", body));              /*for localStorage*/
  // }

  public getLocalProduct() {
    return JSON.parse(localStorage.getItem("products"));
  }
}
