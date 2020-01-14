import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private RT: Router
  ) { }
  public isMain: boolean = false;

  public login(USERNAME: string, PASSWORD: string) {
    const data = {
      UserName: USERNAME,
      Password: PASSWORD
    };
    return this.http.post('https://beta.redmed.ge/web/api/user_service/AdminLogin', data);
  }

  public setLogged(TOKEN: string, USERNAME: string): void {
    this.isMain = false;
    localStorage.setItem('accessToken', TOKEN);
    localStorage.setItem('user', USERNAME);
    this.RT.navigate(['/dashboard']);
  }
}
