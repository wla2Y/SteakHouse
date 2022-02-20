import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Feature } from './data/app.data';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getApp() {}

  // private handleError(error: any) {
  //   let errMsg: string;
  //   try {
  //     if (JSON.parse(error._body)) {
  //       errMsg = JSON.parse(error._body);
  //     } else {
  //       errMsg = 'try again later.';
  //     }
  //   } catch (e) {
  //     errMsg = 'try again later.';
  //   }
  //   return Observable.throw(new Error(errMsg));
  // }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>('https://mocki.io/v1/9ad5f6cd-cb36-42f1-8b0e-aa93e8ed233f');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
