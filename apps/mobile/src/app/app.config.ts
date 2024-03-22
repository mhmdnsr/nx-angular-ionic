import {ApplicationConfig} from '@angular/core';
import {provideRouter, RouteReuseStrategy} from '@angular/router';
import {appRoutes} from './app.routes';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideRouter(appRoutes),
    provideIonicAngular({})
  ],
};
