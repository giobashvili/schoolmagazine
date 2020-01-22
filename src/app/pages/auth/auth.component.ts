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
  public password = '';
  public errorMessage: string;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.auth.login(this.userName, this.password).subscribe(
      result => {
        if (result) {
          if (result.hasOwnProperty('accsesToken')) {
            this.auth.setLogged('accsesToken', 'userName');
            this.auth.isMain = true;
          }
        }
      },
      error => {
        this.errorMessage = 'მომხმარებელი ან პაროლი არასწორია';
        console.warn('auth error');
      }
    );
  }


}
