import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of, pipe} from 'rxjs';
import { Router } from '@angular/router';
import {map} from "rxjs/operators";
import {debug} from "util";

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  private studentList = new BehaviorSubject(null);
  getStudentList = this.studentList.asObservable();
  constructor(
    private http: HttpClient,
    private RT: Router
  ) { }

  public headers: any = {};
  public token: string = localStorage.getItem('accsesToken').toString();

  public setHeaders() {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', ('Bearer ' + this.token));
  }

  public getPupilByClassId(Id: Number): Observable<any>{
    this.setHeaders();
    const headers = this.headers;
    return this.http.get('http://5.175.2.145:2233/api/user/GetPupilByClassId' + '?classId=' + Id , {headers})
      pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  setStudentList(list) {
    this.studentList.next(list)
  }
}
