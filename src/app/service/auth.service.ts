import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
=======
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

>>>>>>> 0add63038aa17eea09bbfbc3356f895fbf4c824d

@Injectable()
export class AuthService {

  public logged: boolean = false;
  public isMain: boolean = false;

  constructor(
    private http: HttpClient,
    private RT: Router
  ) {
    this.checkLogin();
  }
  public login(USERNAME: string, PASSWORD: string) {
    const data = {
      email: USERNAME,
      password: PASSWORD
    };
    return this.http.post('http://5.175.2.145:2233/api/User/LogIn', data);
  }
  public setLogged(TOKEN: string, USERNAME: string): void {
    this.isMain = false;
    this.logged = true;
    localStorage.setItem('accsesToken', TOKEN);
    localStorage.setItem('user', USERNAME);
    this.RT.navigate(['/dashboard']);
  }
  public logOut(): void {
    this.logged = false;
    this.RT.navigate(['/']);
    localStorage.clear();
    this.isMain = false;
  }
  public checkLogin(): void {
    const loggedIn = localStorage.getItem('accsesToken');
    if (loggedIn) {
      this.RT.navigate(['/dashboard']);
      this.isMain = true;
    }
    else {
      this.RT.navigate(['/']);
    }
  }
}

