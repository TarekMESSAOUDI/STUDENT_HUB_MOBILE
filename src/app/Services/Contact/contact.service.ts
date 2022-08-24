import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseURL = 'http://localhost:9091/Contact';

  constructor(private contacthttp: HttpClient) { }

  getInTouch(contact: any): Observable<any> {
    return this.contacthttp.post(this.baseURL, contact).pipe(data => data);
  };

  sendEmail(email: any): Observable<any> {
    return this.contacthttp.post(this.baseURL + '/send', email).pipe(data => data);
  };
}
