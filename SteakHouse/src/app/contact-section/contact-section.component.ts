import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = '';
  email: string = '';
  message: string = '';

  send() {
    console.log('name:', this.name);
    console.log('email:', this.email);
    console.log('message:', this.message);
  }
}
