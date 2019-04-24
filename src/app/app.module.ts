import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';

import{HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { EmpdetailsComponent } from './empdetails/empdetails.component';

import{Employeedetailsauthservice} from './empdetails/empdeatils_guard.service';
//import{EmpserviceService} from './empdetails/empservice.service';
import { Authentication } from './empdetails/authentication.service';

import{EmployeeModule} from './empdetails/employee.module';
import { AboutComponent } from './about/about.component';
import { ElementhighlightDirective } from './elementhighlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    AboutComponent,
    ElementhighlightDirective
    //EmpdetailsComponent
    //NewempComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EmployeeModule,
    //AppRoutingModule,
    HttpClientModule,
    HttpModule

  ],
 // providers:[],
  providers: [Authentication,Employeedetailsauthservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
