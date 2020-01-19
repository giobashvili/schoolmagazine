import { Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public userName = 'iobashviliirakli30@gmail.com';
  public password = 'Benelux123';
  public errorMessage: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
  public login: any = '';

  ngOnInit() {
  }

  onSubmit(): void {
    this.auth.login(( this.userName), this.password).subscribe(
      result => {
        if (result) {
          if (result.hasOwnProperty('accessToken')) {
            // tslint:disable-next-line: no-string-literal
            const accessToken = result['accessToken'];
            // tslint:disable-next-line: no-string-literal
            const userName = result['userInfo']['firstname'];
            this.auth.setLogged(accessToken, userName);
          }
        }
      },
      error => {
        this.errorMessage = 'მომხმარებელი ან პაროლი არასწორია'
        console.warn('auth error');
      }
    );
  }


}
