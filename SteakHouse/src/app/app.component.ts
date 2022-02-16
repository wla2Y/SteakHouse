import { Component, OnInit } from '@angular/core';
import { Feature } from './data/app.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SteakHouse';
  features:Array<any> = [];
  
  constructor() {}

  ngOnInit(): void {
    /* TODO:
      Call API to file Featurs
      Call API to fill Menu
      Make calls feature;
      Make class from Menu item
      Then move it to app service
      //https://mocki.io/v1/8d1ab585-468c-4cff-aad9-118cf376858d
      //https://mocki.io/v1/9ad5f6cd-cb36-42f1-8b0e-aa93e8ed233f

    */
    this.features = [
      {
        'name': 'SPECIAL DISH',
        'icon': 'fa fa-cutlery',
       
      },
      {
        'name': 'BLACK COFFEE',
        'icon': 'fa fa-coffee',
        
      },
      { 'name': 'DINNER', 'icon': 'fa fa-bell-o', },
    ];
  }

}
