import { Component, input, computed, output } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  filterName = input.required<string>();
  products = input.required<Product[]>();

  filterChange = output<string>();

  filteredProduct = computed(() => {
    return this.products().filter((product) =>
      product.name.toLowerCase().includes(this.filterName().toLowerCase()),
    );
  });

  changeFilter($event: Event) {
    this.filterChange.emit(($event.target as HTMLInputElement).value);
  }
}
