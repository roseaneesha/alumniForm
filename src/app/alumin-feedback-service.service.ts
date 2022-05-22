import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AluminFeedbackServiceService {
  private baseUrl = 'http://localhost/projects/alumni/';
  // private baseUrl = '../../';

  constructor(private http: HttpClient) {}

  postAlumniFeedback(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      }),
    };
    return this.http.post(this.baseUrl + 'post.php', data, httpOptions).pipe(
      catchError((e: any) => {
        console.log('hii');

        return e.message;
      })
    );
  }
}
