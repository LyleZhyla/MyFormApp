import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import full IonicModule for all components
import { RouterModule } from '@angular/router'; // Needed if you use routerLink in template

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
  standalone: true,
  imports: [
    IonicModule,   // ✅ Required for ion-header, ion-toolbar, ion-buttons, etc.
    CommonModule,  // ✅ Required for *ngIf, *ngFor
    FormsModule,   // ✅ Required for ngModel or forms
    RouterModule,  // ✅ Required if using routerLink
  ],
})
export class MyAccountPage implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
