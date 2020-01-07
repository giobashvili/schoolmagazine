import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ServiceAPIService} from './service/service-api.service';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
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
