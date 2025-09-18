import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancelled',
  standalone: true,
  templateUrl: './cancelled.page.html',
  imports: [IonicModule, CommonModule],
})
export class CancelledPage {
  orders = [
    { id: 'X5001', item: 'HDMI Cable', price: 12.99 },
    { id: 'X5002', item: 'External HDD 1TB', price: 59.99 },
    { id: 'X5003', item: 'Laptop Cooler', price: 24.99 },
  ];
}
