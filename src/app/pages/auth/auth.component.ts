import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public userName = '';
  public password = '';
  public errorMessage: string;



  constructor() { }

  onSubmit(result: string): string {
    if (this.password && this.userName !== '') {

    }

    {
      return this.errorMessage = 'მომხმარებელი ან პაროლი არასწორია';


    }
  }

    ngOnInit() {
  }

}
