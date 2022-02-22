import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent implements OnInit {
  @Output() contact: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  name: string = '';
  email: string = '';
  message: string = '';

  send() {
    this.http
    console.log('name:', this.name);
    console.log('email:', this.email);
    console.log('message:', this.message);
  }
}
