import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  baseURL: string = 'https://api.github.com/'; //??????????????????/
  name: string = '';
  email: string = '';
  message: string = '';

  send() {
    console.log('name:', this.name);
    console.log('email:', this.email);
    console.log('message:', this.message);
    return this.http.post(
      this.baseURL,
      'name' +
        this.name +
        '     email:' +
        this.email +
        '     message:' +
        this.message
    ); // ?????????? options ???????????????//
  }
}
