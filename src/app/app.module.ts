import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Platform } from '@ionic/angular';

import { UtilService } from './services/UtilService';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarbsModalComponent } from './carbs-modal/carbs-modal.component';

@NgModule({
  declarations: [AppComponent, CarbsModalComponent],
  // entryComponents: [CarbsModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [AdMobPro, Platform, UtilService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
