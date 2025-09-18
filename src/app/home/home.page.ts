// src/app/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class HomePage implements OnInit {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePic: 'https://placehold.co/100x100/512399/FFFFFF?text=JD',
  };

  priceRange: any = { lower: 0, upper: 200 };

  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      imageUrl:
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90',
    },
    {
      id: 2,
      name: 'Smartwatch Pro',
      price: 199.99,
      imageUrl:
        'https://i5.walmartimages.com/seo/3plus-Vibe-Pro-Smartwatch_2016dc4e-1fa0-401c-a773-f07d5f0bb228.faaebe2d8fdb3270f3c9adeeb6c5ca07.png',
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 45.0,
      imageUrl:
        'https://bermorzone.com.ph/wp-content/uploads/2024/03/Eaton-5A-1500I-NEMA-Line-Interactive-UPS-btz.webp',
    },
    {
      id: 4,
      name: 'Gaming Mouse RGB',
      price: 34.99,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61pDShoLXqL.jpg',
    },
    {
      id: 5,
      name: 'USB-C Hub Multiport',
      price: 59.99,
      imageUrl:
        'https://img.lazcdn.com/g/ff/kf/S7021ef13bf564293a8dd68eaa84e3935W.jpg_720x720q80.jpg',
    },
    {
      id: 6,
      name: 'Ergonomic Keyboard',
      price: 89.99,
      imageUrl:
        'https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/BC-Split-Ergonomic-Keyboard.jpg',
    },
  ];

  // ✅ Store filtered products separately
  filteredProducts: any[] = [];

  constructor() {}

  ngOnInit() {
    // show all products initially
    this.filteredProducts = [...this.products];
  }

  // ✅ Explicit filter function
  filterProducts() {
    this.filteredProducts = this.products.filter(
      (p) =>
        p.price >= this.priceRange.lower && p.price <= this.priceRange.upper
    );
  }
}
