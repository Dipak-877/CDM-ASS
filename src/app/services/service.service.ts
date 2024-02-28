


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn:'root',
})
export class DataService {
  API_URL="https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098";

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }
}

