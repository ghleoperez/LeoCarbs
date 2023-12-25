import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Platform } from '@ionic/angular';

import { CarbsService } from '../services/CarbsService';
import { UtilService } from '../services/UtilService';

import { CarbsModalComponent } from '../carbs-modal/carbs-modal.component';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  constructor(
    public carbsService: CarbsService,
    public utilService: UtilService,
    private admob: AdMobPro,
    private platform: Platform,
    private modalCtrl: ModalController) { }

  ionViewDidLoad() {
    this.admob.onAdDismiss()
      .subscribe(() => { console.log('User dismissed ad'); });
  }

  ngOnInit() {
    this.loadInterstitial();
    this.loadBanner();
  }

  loadBanner() {
    let adId;
    if (this.platform.is('android')) {
      adId = this.utilService.adMobId.android.banner;
    } else if (this.platform.is('ios')) {
      adId = this.utilService.adMobId.ios.banner;
    }
    this.admob.createBanner({
      adId,
    })
      .then(() => {
        this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadInterstitial() {
    let adId;
    if (this.platform.is('android')) {
      adId = this.utilService.adMobId.android.interstitial;
    } else if (this.platform.is('ios')) {
      adId = this.utilService.adMobId.ios.interstitial;
    }
    this.admob.prepareInterstitial({
      adId,
     })
      .then(() => { this.admob.showInterstitial(); });
  }

  async openModal(prod: any) {
    this.carbsService.addSearch();
    const modal = await this.modalCtrl.create({
      component: CarbsModalComponent,
      componentProps: { food: prod }
    });

    await modal.present();

    if (this.carbsService.getSearch() > 20) {
      this.carbsService.resetSearch();
      this.loadInterstitial();
    }
  }

}
