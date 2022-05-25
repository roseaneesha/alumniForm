import { FormDataa } from 'src/app/FormDataa';
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

  postAlumniFeedback(data: any) {
    // console.log(data);
    return this.http.post(this.baseUrl + 'post.php', data).pipe(
      catchError((e: any) => {
        return e.message;
      })
    );
  }
}
