import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [

            {path: '', redirectTo:'home'},

            //Home
            { path: 'home', loadChildren: './home/home.module#HomeModule' },

            //Header
             //{ path: 'header', loadChildren: './header/header.module#HeaderModule' },

            // //classes
            // { path: 'classes', loadChildren: './classes/classes.module#ClassesModule' },

            // //student
             { path: 'student', loadChildren: './student/student.module#StudentModule' },


        ]

    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule {

}