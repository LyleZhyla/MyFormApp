// src/app/main-app/main-app.page.ts
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  personCircleOutline,
  bagHandleOutline,
  logOutOutline,
} from 'ionicons/icons';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-main-app',
  standalone: true,
  templateUrl: './main-app.page.html',
  styleUrls: ['./main-app.page.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class MainAppPage implements OnDestroy {
  isHome = false;
  private sub?: Subscription;

  constructor(private router: Router, private menuCtrl: MenuController) {
    // ✅ register icons once
    addIcons({ homeOutline, personCircleOutline, bagHandleOutline, logOutOutline });

    // ✅ set initial menu state
    this.setMenuForUrl(this.router.url);

    // ✅ listen to route changes
    this.sub = this.router.events
      .pipe(filter((e: any): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.setMenuForUrl(e.urlAfterRedirects));
  }

  private async setMenuForUrl(url: string) {
    this.isHome = url.startsWith('/main-app/home');

    // enable menu only on home
    await this.menuCtrl.enable(this.isHome, 'main-menu');

    if (!this.isHome) {
      await this.menuCtrl.close('main-menu');
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
