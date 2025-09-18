import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  imports: [CommonModule, IonicModule],
})
export class ProductDetailsPage {
  // ✅ Accept product as input (from HomePage navigation)
  @Input() product: any = {
    id: 0,
    name: '',
    subtitle: '',
    description: '',
    price: 0,
    imageUrl: '',
  };
}
