import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: any;

  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      imageUrl:
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90',
      subtitle: 'Noise Cancelling Over-Ear',
      description:
        'High-quality wireless headphones with active noise cancellation and long battery life.',
    },
    {
      id: 2,
      name: 'Smartwatch Pro',
      price: 199.99,
      imageUrl:
        'https://i5.walmartimages.com/seo/3plus-Vibe-Pro-Smartwatch_2016dc4e-1fa0-401c-a773-f07d5f0bb228.faaebe2d8fdb3270f3c9adeeb6c5ca07.png',
      subtitle: 'Fitness & Notifications',
      description:
        'Advanced smartwatch with heart-rate monitoring, fitness tracking, and smartphone notifications.',
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 45.0,
      imageUrl:
        'https://bermorzone.com.ph/wp-content/uploads/2024/03/Eaton-5A-1500I-NEMA-Line-Interactive-UPS-btz.webp',
      subtitle: 'Compact & Powerful',
      description:
        'Portable Bluetooth speaker with rich sound, long battery life, and compact design.',
    },
    {
      id: 4,
      name: 'Gaming Mouse RGB',
      price: 34.99,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61pDShoLXqL.jpg',
      subtitle: 'RGB Lighting & Precision',
      description:
        'Ergonomic gaming mouse with customizable RGB lighting and high precision tracking.',
    },
    {
      id: 5,
      name: 'USB-C Hub Multiport',
      price: 59.99,
      imageUrl:
        'https://img.lazcdn.com/g/ff/kf/S7021ef13bf564293a8dd68eaa84e3935W.jpg_720x720q80.jpg',
      subtitle: 'Expand Your Connectivity',
      description:
        'Multiport USB-C hub with HDMI, USB, SD card slots, and fast data transfer.',
    },
    {
      id: 6,
      name: 'Ergonomic Keyboard',
      price: 89.99,
      imageUrl:
        'https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/BC-Split-Ergonomic-Keyboard.jpg',
      subtitle: 'Comfortable Typing',
      description:
        'Split ergonomic keyboard designed to reduce strain and improve typing comfort.',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((p) => p.id === id);
  }

  addToCart() {
    console.log(`${this.product.name} added to cart!`);
  }
}
