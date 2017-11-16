import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DataService } from "../../services/data.service";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        MDBBootstrapModule
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    
    providers: [DataService]
})
export class HomeModule { }
