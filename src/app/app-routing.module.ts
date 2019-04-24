import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {EmpdetailsComponent} from './empdetails/empdetails/empdetails.component';
import {Employeedetailsauthservice} from './empdetails/empdeatils_guard.service';
import{AboutComponent} from './about/about.component';
//import {EmployeeRoutingModule} from './empdetails/emp-routing.module'
//import {NewempComponent} from './empdetails/newemp/newemp.component';

const routes: Routes = [

  {
    path:'',component:HomeComponent,pathMatch:'full'
  },

  {
    path:'home',component:HomeComponent,
    
  },
  {
    path:'aboutus',component:AboutComponent
  },
  {
    path:'login',component:LoginComponent
  },

 

  {
   path:'emp',component:EmpdetailsComponent, canActivate:[Employeedetailsauthservice]
    //loadChildren: './empdetails/employee.module#EmployeeModule'
 
  },

  {
    path:'pagenotfound',component:PagenotfoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
