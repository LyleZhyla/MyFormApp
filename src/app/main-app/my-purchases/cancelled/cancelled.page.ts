import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  product: string;
  reason: string;
  cancelledOn: string;
}

@Component({
  selector: 'app-cancelled',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './cancelled.page.html',
})
export class CancelledPage {
  orders: Order[] = [
    { id: 1, product: 'Gaming Chair', reason: 'Out of stock', cancelledOn: '2025-09-09' },
    { id: 2, product: 'Monitor', reason: 'Customer Request', cancelledOn: '2025-09-10' },
    { id: 3, product: 'Keyboard', reason: 'Payment Failed', cancelledOn: '2025-09-11' },
  ];
}
