import { Component } from '@angular/core';
import {ServiceAPIService} from './service/service-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public result: any = [];
  public popularDoctorsResponse: any = [];

  constructor(
public api: ServiceAPIService
  ) {
    this.language();
    this.popularDoctors();
  }
  public language() {
    this.api.getLanguage().subscribe(
      result => {
        this.result = result['result'];
      }
      );
  }

  public popularDoctors() {
    this.api.getPopularDoctors().subscribe(
      result => {
        this.popularDoctorsResponse = result;
      }
    );
  }

}


