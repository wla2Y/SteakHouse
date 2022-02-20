import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Feature } from './data/app.data';
import { Menulist } from './data/app.data';
import { AppService } from './AppService';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient, private _appService: AppService) {}

//  constructor(private _appService: appService) { }  

  ngOnInit() {
    this._appService.getFeatures().subscribe( data => {
      this.features = data;
      this.featuresLoader = false;
    });

    // this.http
    //   .get<Feature[]>(
    //     'https://mocki.io/v1/9ad5f6cd-cb36-42f1-8b0e-aa93e8ed233f'
    //   )
    //   .subscribe((Fdata) => {
    //     this.features = Fdata;
    //   });

    this.http
      .get<Menulist[]>(
        'https://mocki.io/v1/8d1ab585-468c-4cff-aad9-118cf376858d'
      )
      .subscribe((Mdata) => {
        this.menuItem = Mdata;
      });

//      this.value = this._appService.getApp(); 
  }

  /* TODO:

      Then move it to app service
      loader
      error handlling
      api post daTA , output
   
    */



  // this.features = [
  //   {
  //     'name': 'SPECIAL DISH',
  //     'icon': 'fa fa-cutlery',

  //   },
  //   {
  //     'name': 'BLACK COFFEE',
  //     'icon': 'fa fa-coffee',

  //   },
  //   { 'name': 'DINNER', 'icon': 'fa fa-bell-o', },
  // ];
}
