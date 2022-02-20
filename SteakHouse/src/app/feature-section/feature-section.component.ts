import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css'],
})
export class FeatureSectionComponent implements OnInit {
  @Input() features: any;
  @Input() featuresLoader: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  // features = [
  //   {'name': 'SPECIAL DISH', 'icon': 'fa fa-cutlery',},
  //   {'name': 'BLACK COFFEE','icon': 'fa fa-coffee',},
  //   { 'name': 'DINNER', 'icon': 'fa fa-bell-o', },
  //];
}
