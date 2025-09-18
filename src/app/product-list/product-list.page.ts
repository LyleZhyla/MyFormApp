// src/app/product-list/product-list.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      imageUrl: 'https://placehold.co/300x200/4CAF50/FFFFFF?text=Product+1',
    },
    {
      id: 2,
      name: 'Smartwatch Pro',
      price: 199.99,
      imageUrl: 'https://placehold.co/300x200/FFC107/FFFFFF?text=Product+2',
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 45.0,
      imageUrl: 'https://placehold.co/300x200/2196F3/FFFFFF?text=Product+3',
    },
    {
      id: 4,
      name: 'Gaming Mouse RGB',
      price: 34.99,
      imageUrl: 'https://placehold.co/300x200/9C27B0/FFFFFF?text=Product+4',
    },
    {
      id: 5,
      name: 'USB-C Hub Multiport',
      price: 59.99,
      imageUrl: 'https://placehold.co/300x200/E91E63/FFFFFF?text=Product+5',
    },
    {
      id: 6,
      name: 'Ergonomic Keyboard',
      price: 89.99,
      imageUrl: 'https://placehold.co/300x200/00BCD4/FFFFFF?text=Product+6',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
