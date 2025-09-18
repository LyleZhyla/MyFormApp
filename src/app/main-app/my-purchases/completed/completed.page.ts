import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-completed',
  standalone: true,
  templateUrl: './completed.page.html',
  imports: [IonicModule, CommonModule],
})
export class CompletedPage {
  orders = [
    { id: 'C4001', item: 'Smartwatch Pro', price: 199.99 },
    { id: 'C4002', item: 'Bluetooth Earbuds', price: 59.99 },
    { id: 'C4003', item: 'Portable Charger', price: 29.99 },
  ];
}
