import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  product: string;
  tracking: string;
  date: string;
}

@Component({
  selector: 'app-to-ship',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './to-ship.page.html',
})
export class ToShipPage {
  orders: Order[] = [
    { id: 1, product: 'Laptop Stand', tracking: 'TRK12345', date: '2025-09-14' },
    { id: 2, product: 'Mechanical Keyboard', tracking: 'TRK12346', date: '2025-09-15' },
    { id: 3, product: 'Gaming Mousepad', tracking: 'TRK12347', date: '2025-09-16' },
  ];
}
