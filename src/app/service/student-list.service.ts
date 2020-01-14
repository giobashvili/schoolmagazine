import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
  constructor(
    private http: HttpClient
  ) { }

  public getsudentList(): Observable<any>{
    return this.http.get('https://redmed.ge/web/api/users/get_popular_doctor')
  }
}
