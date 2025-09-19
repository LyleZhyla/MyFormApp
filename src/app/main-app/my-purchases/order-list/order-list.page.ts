// src/app/main-app/my-purchases/order-list/order-list.page.ts
import { Component, computed, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ALL_ORDERS, Order, OrderStatus } from '../orders.data';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

type StatusOrAll = OrderStatus | 'all';

@Component({
  standalone: true,
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  imports: [IonicModule, CommonModule],
})
export class OrderListPage {
  private route = inject(ActivatedRoute);

  status: StatusOrAll = (this.route.snapshot.data?.['status'] as StatusOrAll) ?? 'all';

  // watch q query param
  private qSignal = toSignal(this.route.queryParams.pipe(map(p => p['q'] || '')));

  // source filtered by status
  private source = computed<Order[]>(() =>
    this.status === 'all' ? ALL_ORDERS : ALL_ORDERS.filter(o => o.status === this.status)
  );

  // final filtered by q
  filtered = computed<Order[]>(() => {
    const q = (this.qSignal() || '').toLowerCase().trim();
    const base = this.source();
    if (!q) return base;
    return base.filter(o =>
      o.title.toLowerCase().includes(q) ||
      o.store.toLowerCase().includes(q) ||
      o.id.toLowerCase().includes(q)
    );
  });

  trackId(index: number, item: Order) {
    return item.id;
  }
}
