

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {EmpdetailsComponent} from './empdetails/empdetails.component';
import {NewempComponent} from './newemp/newemp.component';
import {EmployeeRoutingModule} from './emp-routing.module';
import {EmpmainComponent} from './empmain.component';
//import {Employeedetailsauthservice} from './empdeatils_guard.service';
//import {Authentication} from './authentication.service';


@NgModule({
   
    declarations: 
    [
        EmpdetailsComponent,
        NewempComponent,
        EmpmainComponent
       
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EmployeeRoutingModule
    ],
    providers:[]
    //providers: [Employeedetailsauthservice,Authentication]
})

export class EmployeeModule{
}