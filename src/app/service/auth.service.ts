import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private RT: Router
  ) { this.checkLogin(); }
  public isMain = false;

  public headers: any = {};

  public setHeaders() {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
  }

  public login(email: string, password: string) {
    const data = {
      email: email,
      password: password
    };
    this.setHeaders();
    const headers = this.headers;
    return this.http.post('http://localhost:53047/api/user/LogIn', data,{ headers });
  }

  public setLogged(TOKEN: string, email: string): void {
    this.isMain = false;
    localStorage.setItem('accessToken', TOKEN);
    localStorage.setItem('user', email);
    this.RT.navigate(['/dashboard']);
  }
  public checkLogin(): void {
    const loggedIn = localStorage.getItem('accessToken');
    if (loggedIn) {
      this.RT.navigate(['/dashboard']);
      this.isMain = false;
    } else {
      this.RT.navigate(['/']);
    }
}
}

