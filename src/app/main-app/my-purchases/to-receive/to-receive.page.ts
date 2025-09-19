import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  product: string;
  deliveredBy: string;
  date: string;
}

@Component({
  selector: 'app-to-receive',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './to-receive.page.html',
})
export class ToReceivePage {
  orders: Order[] = [
    { id: 1, product: 'Smartphone Case', deliveredBy: 'LBC', date: '2025-09-13' },
    { id: 2, product: 'Portable Charger', deliveredBy: 'J&T', date: '2025-09-14' },
    { id: 3, product: 'Webcam', deliveredBy: '2GO', date: '2025-09-15' },
  ];
}
