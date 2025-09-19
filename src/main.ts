// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers!, // <- this ensures your appConfig providers are kept
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter([], withPreloading(PreloadAllModules)), // [] if you already gave routes in appConfig
  ],
}).catch(err => console.error(err));
