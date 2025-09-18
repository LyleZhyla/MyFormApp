import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-receive',
  standalone: true,
  templateUrl: './to-receive.page.html',
  imports: [IonicModule, CommonModule],
})
export class ToReceivePage {
  orders = [
    { id: 'TR3001', item: 'Gaming Keyboard', price: 79.99 },
    { id: 'TR3002', item: 'Webcam HD', price: 49.99 },
    { id: 'TR3003', item: 'Mouse Pad XL', price: 14.99 },
  ];
}
