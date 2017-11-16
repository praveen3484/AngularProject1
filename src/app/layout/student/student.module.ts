import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {  NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { DataService } from "../../services/data.service";
import { DataInterceptor } from "../../core/interceptors/auth-token.interceptor";

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StudentRoutingModule
    ],
    providers: [
        DataService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: DataInterceptor,
        multi: true,
      }
     ]
})
export class StudentModule { }
