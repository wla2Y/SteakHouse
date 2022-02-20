import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Feature, Menulist } from './data/app.data';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    return this.http
      .get<Feature[]>(
        'https://mocki.io/v1/9ad5f6cd-cb36-42f1-8b0e-aa93e8ed233f'
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  getMenulist(): Observable<Menulist[]> {
    return this.http
      .get<Menulist[]>(
        'https://mocki.io/v1/8d1ab585-468c-4cff-aad9-118cf376858d'
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
