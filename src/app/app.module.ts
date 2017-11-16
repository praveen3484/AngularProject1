import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './core/interceptors/auth-token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,    
    AppRoutingModule
  ],
   schemas: [ NO_ERRORS_SCHEMA ],
   providers: [
      DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true,
    }
   ],bootstrap: [AppComponent]
})
export class AppModule { }
