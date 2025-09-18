import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-ship',
  standalone: true,
  templateUrl: './to-ship.page.html',
  imports: [IonicModule, CommonModule],
})
export class ToShipPage {
  orders = [
    { id: 'TS2001', item: 'Laptop Stand', price: 39.99 },
    { id: 'TS2002', item: 'Bluetooth Speaker', price: 59.99 },
    { id: 'TS2003', item: 'External SSD 500GB', price: 89.99 },
  ];
}
