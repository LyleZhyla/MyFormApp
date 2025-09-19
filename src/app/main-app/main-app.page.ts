// src/app/main-app/main-app.page.ts
import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { filter, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
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
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-app',
  standalone: true,
  templateUrl: './main-app.page.html',
  styleUrls: ['./main-app.page.scss'],
  imports: [
    CommonModule,
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
    IonRouterOutlet
  ],
})
export class MainAppPage implements OnDestroy {
  isHome = false;
  private sub?: Subscription;

  constructor(private router: Router, private menuCtrl: MenuController) {
    // set initial state
    this.setMenuForUrl(this.router.url);

    // react to navigation changes
    this.sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.setMenuForUrl(e.urlAfterRedirects));
  }

  private async setMenuForUrl(url: string) {
    // If URL starts with /main-app/home, allow menu; else disable and close it.
    this.isHome = url.startsWith('/main-app/home');
    await this.menuCtrl.enable(this.isHome, 'main-menu');
    if (!this.isHome) {
      await this.menuCtrl.close('main-menu');
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
