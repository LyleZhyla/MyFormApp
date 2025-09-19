import { Component, computed, inject, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ALL_ORDERS, Order, OrderStatus } from '../orders.data';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

type StatusOrAll = OrderStatus | 'all';

@Component({
  standalone: true,
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class OrderListPage {
  private route = inject(ActivatedRoute);

  // status from route data (default: "all")
  status: StatusOrAll =
    (this.route.snapshot.data?.['status'] as StatusOrAll) ?? 'all';

  // query from query params
  private query = toSignal(
    this.route.queryParams.pipe(map(params => params['q'] || ''))
  );

  // base source depending on status
  private source = computed<Order[]>(() => {
    if (this.status === 'all') {
      return ALL_ORDERS;
    }
    return ALL_ORDERS.filter(o => o.status === this.status);
  });

  // final filtered list
  filtered = computed<Order[]>(() => {
    const q = this.query()?.toLowerCase().trim();
    const base = this.source();
    if (!q) return base;

    return base.filter(
      o =>
        o.title.toLowerCase().includes(q) ||
        o.store.toLowerCase().includes(q) ||
        o.id.toString().includes(q) // ✅ fixed id check
    );
  });
}
