import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CarbsService } from '../services/CarbsService';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

@Injectable()
export class Tab1Page {

  constructor(
    private http: HttpClient,
    public carbsService: CarbsService) {
  }

  letsSearch(ev: any) {
    this.carbsService.addSearch();
    this.carbsService.setProducts([]);
    const search = ev.target.value;
    if (search.length > 2) {
      this.http.get('https://searchurl/get.php?search=' + search)
        .subscribe(
          (val: any) => {
            this.carbsService.setProducts(val);
          },
          response => {
            console.log('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    }
  }
}
