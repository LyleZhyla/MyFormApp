import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  product: string;
  amount: number;
  completedOn: string;
}

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './completed.page.html',
})
export class CompletedPage {
  orders: Order[] = [
    { id: 1, product: 'Desk Lamp', amount: 350, completedOn: '2025-09-10' },
    { id: 2, product: 'External SSD', amount: 4500, completedOn: '2025-09-11' },
    { id: 3, product: 'Ergonomic Chair', amount: 12000, completedOn: '2025-09-12' },
  ];
}
