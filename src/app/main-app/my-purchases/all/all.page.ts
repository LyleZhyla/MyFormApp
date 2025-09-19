import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ALL_ORDERS, Order } from '../orders.data';

@Component({
  standalone: true,
  selector: 'app-all',
  templateUrl: './all.page.html',
  imports: [IonicModule, CommonModule],
})
export class AllPage {
  orders: Order[] = ALL_ORDERS;
  query: string = '';

  // Para mag-filter ng orders
  filtered(): Order[] {
    if (!this.query) return this.orders;
    return this.orders.filter(o =>
      o.title.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  // TrackBy para mas mabilis mag-render
  trackId(index: number, item: Order): string {
    return item.id;
  }
}
