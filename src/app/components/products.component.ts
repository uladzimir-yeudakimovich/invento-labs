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
  public show: boolean = true;
  public detale: number;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(dataFromServer => { 
      for (const key in dataFromServer['products']) {
        this.products.push(dataFromServer['products'][key]);
      }
    });
  }

  showDetails(e) {
    this.show = false;
    this.detale = e;
  }

  closeDetails() {
    this.show = true;
  }

  deleteDetails() {
    this.products.splice(this.detale, 1);
    this.show = true;
  }
}