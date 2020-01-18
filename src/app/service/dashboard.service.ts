import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  public getDashboard(): Observable<any> {
    return this.http.get('https://redmed.ge/web/api/user_service/GetCountry');
  }
}
