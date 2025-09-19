// src/app/main-app/my-purchases/my-purchases.page.ts
import { Component, computed, signal } from '@angular/core';
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
  public query = signal('');
  private allOrders: Order[] = ALL_ORDERS;

  // reactive filtered orders (based on search query)
  filteredOrders = computed(() => {
    const q = (this.query() || '').toLowerCase().trim();
    if (!q) return this.allOrders;
    return this.allOrders.filter(
      o =>
        o.title.toLowerCase().includes(q) ||
        o.store.toLowerCase().includes(q) ||
        o.id.toLowerCase().includes(q)
    );
  });

  // counts used in badges (reflect current search)
  allCount = computed(() => this.filteredOrders().length);
  toPayCount = computed(() => this.filteredOrders().filter(o => o.status === 'to-pay').length);
  toShipCount = computed(() => this.filteredOrders().filter(o => o.status === 'to-ship').length);
  toReceiveCount = computed(() => this.filteredOrders().filter(o => o.status === 'to-receive').length);
  completedCount = computed(() => this.filteredOrders().filter(o => o.status === 'completed').length);
  cancelledCount = computed(() => this.filteredOrders().filter(o => o.status === 'cancelled').length);

  constructor(private router: Router) {}

  onSearchInput(event: any) {
    // update local signal and push into query params so child pages read it
    this.query.set(event?.detail?.value ?? '');
    this.router.navigate([], {
      queryParams: { q: this.query() },
      queryParamsHandling: 'merge',
    });
  }

  // track function for ngFor performance
  trackId(index: number, item: Order) {
    return item.id;
  }
}
