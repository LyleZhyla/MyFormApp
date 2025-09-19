// src/app/app.component.ts
import { Component } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp],
  template: `<ion-app><router-outlet></router-outlet></ion-app>`,
})
export class AppComponent {}
