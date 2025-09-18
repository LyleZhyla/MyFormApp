import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  personCircleOutline,
  personOutline,
  cardOutline,
  locationOutline,
  keyOutline,
  bagHandleOutline,
  logOutOutline,
  listOutline,
  walletOutline,
  archiveOutline,
  checkmarkCircleOutline,
  closeCircleOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-main-app',
  standalone: true,
  templateUrl: './main-app.page.html',
  styleUrls: ['./main-app.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class MainAppPage {
  constructor(private menuCtrl: MenuController) {
    // ✅ Register all icons used in this layout (and child tabs)
    addIcons({
      'home-outline': homeOutline,
      'person-circle-outline': personCircleOutline,
      'person-outline': personOutline,
      'card-outline': cardOutline,
      'location-outline': locationOutline,
      'key-outline': keyOutline,
      'bag-handle-outline': bagHandleOutline,
      'log-out-outline': logOutOutline,
      'list-outline': listOutline,
      'wallet-outline': walletOutline,
      'archive-outline': archiveOutline,
      'checkmark-circle-outline': checkmarkCircleOutline,
      'close-circle-outline': closeCircleOutline,
    });
  }

  // ✅ Open the side menu
  openMenu() {
    this.menuCtrl.open('main-menu');
  }
}
