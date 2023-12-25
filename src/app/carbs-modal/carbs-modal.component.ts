import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carbs-modal',
  templateUrl: './carbs-modal.component.html',
  styleUrls: ['./carbs-modal.component.scss'],
})
export class CarbsModalComponent {

  public food: any;

  constructor(
    private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
