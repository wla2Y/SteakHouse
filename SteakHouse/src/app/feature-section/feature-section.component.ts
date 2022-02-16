import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css'],
})
export class FeatureSectionComponent implements OnInit {
  feature = [
    {
      name: 'SPECIAL DISH',
      icon: 'fa fa-cutlery',
     
    },
    {
      name: 'BLACK COFFEE',
      icon: 'fa fa-coffee',
      
    },

    { name: 'DINNER', icon: 'fa fa-bell-o', },
  ];

  constructor() {}

  ngOnInit(): void {}
}
