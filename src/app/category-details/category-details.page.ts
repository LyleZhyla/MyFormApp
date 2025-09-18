import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class CategoryDetailsPage implements OnInit {
  products = [
    { id: 1, name: 'Gaming Laptop', price: 1200, imageUrl: 'https://placehold.co/300x200/4CAF50/FFFFFF?text=Laptop' },
    { id: 2, name: 'Mechanical Keyboard', price: 150, imageUrl: 'https://placehold.co/300x200/FFC107/FFFFFF?text=Keyboard' },
    { id: 3, name: 'Wireless Mouse', price: 50, imageUrl: 'https://placehold.co/300x200/2196F3/FFFFFF?text=Mouse' },
    { id: 4, name: '4K Monitor', price: 400, imageUrl: 'https://placehold.co/300x200/9C27B0/FFFFFF?text=Monitor' },
    { id: 5, name: 'External SSD', price: 99, imageUrl: 'https://placehold.co/300x200/E91E63/FFFFFF?text=SSD' },
    { id: 6, name: 'Gaming Chair', price: 250, imageUrl: 'https://placehold.co/300x200/00BCD4/FFFFFF?text=Chair' },
  ];

  constructor() {}

  ngOnInit() {}
}
