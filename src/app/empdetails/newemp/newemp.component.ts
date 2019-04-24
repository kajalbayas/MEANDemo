import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from '@angular/router';
import {Emp} from '../emp.model';
import {EmpserviceService}  from '../empservice.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit 
{

  selectedemp:Emp=new Emp();
 
  empid:any=0;

  
 constructor(private activatedroute:ActivatedRoute,private router:Router,private empserivce:EmpserviceService)
 {

 }

 getparams(employeeid):void
 {
  debugger;
   this.empserivce.getemployeedetailsbyid(employeeid).subscribe(
        (data:any)=>
        {
          debugger;
         console.log('fetched data'+data);
         this.selectedemp = data;
       })
  }

ngOnInit()
{
  debugger;

this.activatedroute.params.subscribe((params:Params) => 
{
debugger;
this.empid=params['id'];
console.log('selected id'+this.empid);
this.getparams(this.empid);
})
}

 }
