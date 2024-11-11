import { APP_INITIALIZER, LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import { initializer } from './utils/keycloak-init';
import { AppLayoutModule } from '@shared/layout/app.layout.module';
import { NotfoundComponent } from '@shared/pages/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    KeycloakAngularModule,
    AppLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt_BR',
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializer,
    //   multi: true,
    //   deps: [KeycloakService]
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
