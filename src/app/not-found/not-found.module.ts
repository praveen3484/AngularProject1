import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NotFoundComponent } from "./not-found.component";
import { RouterModule } from "@angular/router";
 import { NotFoundRoutingModule } from "./not-found-routing.module";



@NgModule({
    declarations: [
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MDBBootstrapModule,
        NotFoundRoutingModule
    ],
    schemas: [NO_ERRORS_SCHEMA], //Imp to display 
    providers: []
})
export class NotFoundModule { }
