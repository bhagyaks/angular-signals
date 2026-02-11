import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { Product } from './product';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-signals');

  theme = signal('light');
  label = this.theme();
  ToggleMode() {
    this.theme.update((value) => (value === 'light' ? 'dark' : 'light'));
  }
  constructor() {
    effect(() => {
      this.label = this.theme();
    });
  }

  price = 19;
  quantity = signal(10);
  totalPrice = computed(() => this.price * this.quantity());
  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Milk',
      price: 25,
    },
    {
      id: 2,
      name: 'Carrot',
      price: 10,
    },
    {
      id: 3,
      name: 'Egg',
      price: 29,
    },
    {
      id: 4,
      name: 'Rice',
      price: 15,
    },
  ];
  filterName = signal('');
}
