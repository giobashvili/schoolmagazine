import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private RT: Router
  ) { this.checkLogin(); }
  public isMain = false;

  public login(email: string, password: string) {
    const data = {
      UserName: email,
      Password: password
    };
    return this.http.post('http://5.175.2.145:2233/api/User/LogIn', data);
  }

  public setLogged(TOKEN: string, email: string): void {
    this.isMain = false;
    localStorage.setItem('accessToken', TOKEN);
    localStorage.setItem('user', email);
    this.RT.navigate(['/dashboard']);
  }
  public checkLogin(): void {
    const loggedIn = localStorage.getItem('accsesToken');
    if (loggedIn) {
      this.RT.navigate(['/dashboard']);
      this.isMain = false;
    } else {
      this.RT.navigate(['/']);
    }
}
}

