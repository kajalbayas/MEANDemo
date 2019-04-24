import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
   

  title:string="TechPrime Lab Soft Pvt Ltd";
   

  constructor(private router :Router) { }
 
  /*details():void
  {
      debugger;
      this.router.navigate(['/aboutus']);
  }*/


  /*displayname(empname)
  {
    debugger;
     console.log(empname);}*/


  ngOnInit() 
  {

  }

}
