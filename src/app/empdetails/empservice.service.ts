import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
/*const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};*/


import { Http,Response } from '@angular/http';
import{Emp} from './emp.model';
import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService 
{

  //employees:string;
  //private Appurl :string="http://localhost:8000/employee";
   
  Appurl:string="";

 constructor(private httpclient:HttpClient,private http:Http) 
 {}

 detailemp():Observable<any>
 {
   this.Appurl="http://localhost:8000/api/getemp";
   return this.httpclient.get(this.Appurl);
  }
 


 getemployeedetailsbyid(id:number):Observable<any>
 {
   debugger;
   
  // this.Appurl="http://localhost:8000/api/getempbyid/:id";
  this.Appurl="http://localhost:8000/api/getempbyid/:id";
   return this.httpclient.get(this.Appurl+'/'+id);
 }




updateempdetails(emp:Emp):Observable<any>
{
  this.Appurl="http://localhost:8000/api/emp/:id";
  return this.httpclient.put(this.Appurl+'/'+emp.id,emp);
}


deletProductById(id:number):Observable<any>
{
  this.Appurl="http://localhost:8000/api/emp/id";
  return this.httpclient.delete<any>(this.Appurl+"/"+id);
}

saveallemp(emp:Emp):Observable<any>
{
  this.Appurl="http://localhost:8000/api/saveemp";
  return this.httpclient.post<any>(this.Appurl,emp);
}

extractResponse(response:Response):any{
  let body = response.json();
  return body;
}

}
