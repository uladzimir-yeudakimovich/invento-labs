import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = [];
  public searchStr: string = '';
  public showNewModal: boolean = false;
  public newProduct = {
      id: 6,
      logo: "blue",
      name: "Product 7",
      company: "Company 7",
      image: "blue",
      description: "Lorem ipsum dolor",
      action1: "ACTION 1",
      action2: "ACTION 2",
      modal: "Lorem ipsum dolor sit amet"
  }
  public localProducts = [];
  public model = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
    this.getLocalProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(dataFromServer => { 
      for (const key in dataFromServer['products']) {
        this.products.push(dataFromServer['products'][key]);
      }
    });
  }

  getLocalProducts() {
    for (const key in this.productsService.getLocalProduct()['products']) {
      this.localProducts.push(this.productsService.getLocalProduct()['products'][key]);
    }
    // this.products.forEach((n) => this.model.push(n));            /*for server*/
    this.localProducts.forEach((n) => this.model.push(n));          /*for localStorage*/
  }

  newModal() {
    this.showNewModal = true;
  }

  closeNewModal() {
    this.showNewModal = false;
  }

  addNewProduct() {
    this.showNewModal = false;
    this.newProduct.id = this.products.length + this.localProducts.length;
    this.model.push(this.newProduct);
    this.productsService.updateProducts({products: this.model});
    this.localProducts.push(this.newProduct);
  }
}