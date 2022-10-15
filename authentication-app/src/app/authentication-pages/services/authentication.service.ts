import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterInfo } from './../models/register-info.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Bypass-Tunnel-Reminder': 'true',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  createUser(request: RegisterInfo) {
    const body = JSON.stringify(request);
    return this.http.post<RegisterInfo>('https://angry-lies-cry-179-197-35-135.loca.lt/users', body, httpOptions)
  }
}
