import { Component, Input } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component ({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public products = [];
  public show: boolean = true;
  public detale: number;

  constructor(private productsService: ProductsService) {}

  @Input() product;

  showDetails($event) {
    this.show = false;
    this.detale = $event.target['id'];
  }

  closeDetails() {
    this.show = true;
  }

  deleteDetails() {
    this.show = true;
    this.productsService.setProduct(this.detale);
    this.productsService.updateLocalProducts(this.detale);
  }
}