import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products, value) {
    return products.filter(product => {
      return product.name.includes(value);
    });
  }
}