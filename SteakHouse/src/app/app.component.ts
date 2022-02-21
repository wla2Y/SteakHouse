import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Feature } from './data/app.data';
import { Menulist } from './data/app.data';
import { AppService } from './AppService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SteakHouse';

  features: Array<Feature> = [];
  menuItem: Array<Menulist> = [];

  featuresLoader = true;
  MenuLoader = true;
  constructor(private http: HttpClient, private _appService: AppService) {}

  ngOnInit() {
    this._appService.getFeatures().subscribe((data) => {
      this.features = data;
      this.featuresLoader = false;
    });

    this._appService.getMenulist().subscribe((data) => {
      this.menuItem = data;
      this.MenuLoader = false;
    });

    // this.http.get<Feature[]>('https://mocki.io/v1/9ad5f6cd-cb36-42f1-8b0e-aa93e8ed233f').subscribe((Fdata) => {
    //  this.features = Fdata;});
    // this.http.get<Menulist[]>('https://mocki.io/v1/8d1ab585-468c-4cff-aad9-118cf376858d').subscribe((Mdata) => {this.menuItem = Mdata;});    //      this.value = this._appService.getApp();
  }

  /* TODO:api post daTA , output*/
}
