import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterInfo } from './../models/register-info.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Bypass-Tunnel-Reminder': 'test',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  createUser(request: RegisterInfo) {
    const body = JSON.stringify(request);
    return this.http.post<RegisterInfo>('https://chatty-knives-wash-179-197-35-135.loca.lt/users', body)
  }
}
