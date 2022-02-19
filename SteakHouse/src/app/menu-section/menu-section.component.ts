import { Component,  Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css'],
})
export class MenuSectionComponent implements OnInit {
 @Input() menuItem:any;
 
 
 

  // menu = [
  //   {
  //     type: 'Breakfast',
  //     imgtype: './assets/images/gallery-img1.jpg',
  //     price: '24',
  //   },
  //   {
  //     type: 'New Pizza',
  //     imgtype: './assets/images/gallery-img2.jpg',
  //     price: '36',
  //   },

  //   {
  //     type: 'Mushroom',
  //     imgtype: './assets/images/gallery-img3.jpg',
  //     price: '24',
  //   },
  
  //   {
  //     type: 'Seafood',
  //     imgtype: './assets/images/gallery-img5.jpg',
  //     price: '32',
    
  //   },


  //   {
  //     type: 'Spicy Beef',
  //     imgtype: './assets/images/gallery-img5.jpg',
  //     price: '64',
     
    
  //   },
  

  //   {
  //     type: ' dinner',
  //     imgtype: './assets/images/gallery-img6.jpg',
  //     price: '45',
  //   },


  // ];

  constructor() {}

  ngOnInit(): void {}
}
