import { Component, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ALL_ORDERS, Order } from './orders.data';

@Component({
  selector: 'app-my-purchases',
  standalone: true,
  templateUrl: './my-purchases.page.html',
  styleUrls: ['./my-purchases.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class MyPurchasesPage {
  private orders: Order[] = ALL_ORDERS;
  public query = signal('');

  constructor(private router: Router) {}

  onSearchInput(event: any) {
    this.query.set(event.detail.value || '');
    this.router.navigate([], {
      queryParams: { q: this.query() },
      queryParamsHandling: 'merge',
    });
  }

  get toPayCount() {
    return this.orders.filter(o => o.status === 'to-pay').length;
  }

  get toShipCount() {
    return this.orders.filter(o => o.status === 'to-ship').length;
  }

  get toReceiveCount() {
    return this.orders.filter(o => o.status === 'to-receive').length;
  }

  get completedCount() {
    return this.orders.filter(o => o.status === 'completed').length;
  }

  get cancelledCount() {
    return this.orders.filter(o => o.status === 'cancelled').length;
  }
}
