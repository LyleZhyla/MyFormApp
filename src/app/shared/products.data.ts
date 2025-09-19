export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/024/558/883/...'
  },
  {
    id: 2,
    name: 'Smartwatch Pro',
    price: 199.99,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/050/816/586/...'
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    price: 45.00,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/027/144/977/...'
  },
  {
    id: 4,
    name: 'Gaming Mouse RGB',
    price: 34.99,
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/048/218/131/...'
  },
  {
    id: 5,
    name: 'USB-C Hub Multiport',
    price: 59.99,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/050/756/149/...'
  },
  {
    id: 6,
    name: 'Ergonomic Keyboard',
    price: 89.99,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/011/665/175/...'
  }
];
