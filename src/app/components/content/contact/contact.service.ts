import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private baseURL = 'https://formspree.io/f/mwkdqqya'

    constructor(private http: HttpClient) {}

    sendEmail(forms: any): Observable<any> {
        return this.http.post(`${this.baseURL}`, forms);
    }
}
