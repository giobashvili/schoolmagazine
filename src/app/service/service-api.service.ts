import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceAPIService {

  constructor(
    private http: HttpClient
  ) {

  }
  public getLanguage() {
    this.http.get('https://redmed.ge/web/api/user_service/GetLanguage').subscribe(res=>{
  
    });
}

  public getPopularDoctors(): Observable<any> {
    return this.http.get('https://redmed.ge/web/api/users/get_popular_doctor');
  }
}
