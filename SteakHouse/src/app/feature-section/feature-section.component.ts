import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.css'],
})
export class FeatureSectionComponent implements OnInit {

  @Input() features:any;

  constructor() {}

  ngOnInit(): void {


  }
}
