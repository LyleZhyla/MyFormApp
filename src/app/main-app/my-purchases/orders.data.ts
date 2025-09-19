import { PRODUCTS } from '../../shared/products.data';

export type OrderStatus =
  | 'to-pay'
  | 'to-ship'
  | 'to-receive'
  | 'completed'
  | 'cancelled';

export interface Order {
  id: string;
  store: string;
  title: string;
  variation?: string;
  qty: number;
  status: OrderStatus;
  deliveredNote?: string;
  icon: string; // Ionicon name representing status
  productImageUrl: string; // still available if you want thumbnails later
  price: number;
}

const STATUS_ICON: Record<OrderStatus, string> = {
  'to-pay': 'wallet-outline',
  'to-ship': 'airplane-outline',
  'to-receive': 'cube-outline',
  'completed': 'checkmark-circle-outline',
  'cancelled': 'close-circle-outline',
};

function assignStatusByIndex(i: number): OrderStatus {
  const s: OrderStatus[] = [
    'to-pay',
    'to-ship',
    'to-receive',
    'completed',
    'cancelled',
  ];
  return s[(i + 1) % s.length];
}

function variationForProduct(name: string): string | undefined {
  if (/Headphones/i.test(name)) return 'Black';
  if (/Smartwatch/i.test(name)) return '41mm';
  if (/Speaker/i.test(name)) return 'Graphite';
  if (/Mouse/i.test(name)) return 'RGB Edition';
  if (/Hub/i.test(name)) return '7-in-1';
  if (/Keyboard/i.test(name)) return 'Full-size';
  return undefined;
}

function storeForProduct(name: string): string {
  if (/Headphones|Speaker|Earbuds/i.test(name)) return 'Gear Hub';
  if (/Mouse|Keyboard|Hub/i.test(name)) return 'Tech Bay';
  if (/Watch/i.test(name)) return 'Chrono Store';
  return 'Uniklo Store';
}

export const ALL_ORDERS: Order[] = PRODUCTS.map((p) => {
  const status = assignStatusByIndex(p.id);
  return {
    id: String(1000 + p.id),
    store: storeForProduct(p.name),
    title: p.name,
    variation: variationForProduct(p.name),
    qty: 1,
    status,
    deliveredNote: status === 'to-receive' ? 'Parcel has been delivered' : undefined,
    icon: STATUS_ICON[status],
    productImageUrl: p.imageUrl,
    price: p.price,
  };
});
