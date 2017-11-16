import { LayoutComponent } from "./layout.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LayoutRoutingModule } from "./layout-routing.module";



@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        LayoutRoutingModule,
    ],
    schemas: [NO_ERRORS_SCHEMA], //Imp to display 
    providers: []
})
export class LayoutModule { }
