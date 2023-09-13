import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseURL = 'https://formsubmit.io/send/8b24839e-8cdf-46f2-af1e-3c3a4c1cd59a';

  constructor(private http: HttpClient) {}

  sendEmail(forms: any): Observable<any> {
    return this.http.post(this.baseURL, forms);
  }
}
