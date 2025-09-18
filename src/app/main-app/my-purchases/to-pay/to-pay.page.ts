import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-pay',
  standalone: true,
  templateUrl: './to-pay.page.html',
  imports: [IonicModule, CommonModule],
})
export class ToPayPage {
  orders = [
    { id: 'TP1001', item: 'Wireless Mouse', price: 25.99 },
    { id: 'TP1002', item: 'USB-C Hub', price: 49.99 },
    { id: 'TP1003', item: 'Laptop Sleeve', price: 19.99 },
  ];
}
