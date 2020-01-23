import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public headers: any = {};
  public token: string = localStorage.getItem('accsesToken').toString();

  constructor(
    private http: HttpClient
  ) { }

  public setHeaders() {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', ('Bearer ' + this.token));
  }

  public getUserClasses(): Observable<any> {
    this.setHeaders();
    const headers = this.headers;
    return this.http.get('http://5.175.2.145:2233/api/user/GetUserClasses', {headers});
  }
}
