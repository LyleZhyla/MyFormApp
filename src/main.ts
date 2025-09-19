// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter([], withPreloading(PreloadAllModules)), // routes provided in appConfig already (safe)
  ],
}).catch(err => console.error(err));
