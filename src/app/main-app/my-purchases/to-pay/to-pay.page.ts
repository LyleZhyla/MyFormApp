import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  product: string;
  amount: number;
  date: string;
}

@Component({
  selector: 'app-to-pay',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './to-pay.page.html',
})
export class ToPayPage {
  orders: Order[] = [
    { id: 1, product: 'Wireless Mouse', amount: 500, date: '2025-09-15' },
    { id: 2, product: 'Bluetooth Headphones', amount: 1200, date: '2025-09-16' },
    { id: 3, product: 'USB-C Hub', amount: 800, date: '2025-09-17' },
  ];
}
