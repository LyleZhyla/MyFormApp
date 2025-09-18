import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-purchases',
  standalone: true,
  templateUrl: './my-purchases.page.html',
  styleUrls: ['./my-purchases.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class MyPurchasesPage {}
