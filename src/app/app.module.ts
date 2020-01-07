import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServiceAPIService} from './service/service-api.service';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ServiceAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
