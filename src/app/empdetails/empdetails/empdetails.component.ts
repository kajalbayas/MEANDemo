import { Component, OnInit } from '@angular/core';
import { Emp} from '../emp.model'
import {EmpserviceService} from '../empservice.service';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
//import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css'],
  providers: [EmpserviceService]
})
export class EmpdetailsComponent implements OnInit
 {

  newemp: Emp = new Emp();
  employeeform: FormGroup;
  selectedProduct: Emp = new Emp();
  emp: Emp[] = [];
  statusCode: string = '';

  isUpdate:boolean=false;

  getproductdetail(id:number):void
  {
    debugger;
    this.empservice.getemployeedetailsbyid(id).subscribe
    ((data:any)=>
     {

        debugger;
       
        this.selectedProduct=data;
         console.log(this.selectedProduct);
        //console.log("-------"+this.selectedProduct);
      })
    }
  
    getselectedid(id:number):void
    {
      debugger;
      console.log(id);
      this.router.navigate(['emp/newemp',id]);

    }

    

  //edit(id:number):void
  edit(data:any):void
  { 
    debugger;
    this.isUpdate=true;
    debugger;
    
    this.employeeform.setValue({
      //empid:data.empid,
      name:data.name,
      city: data.city,
      designation:data.designation,
      empid:data.empid,
      _id:data._id

    }); // new code. here u only need to bind the data to form using set value function


    
    //  this.empservice.getemployeedetailsbyid(data).subscribe(
    //    (data:any)=>
    //    {

    //     console.log(data);
    //      this.newemp=data;
    //     console.log("---------"+this.newemp);
    //      }
    //  ) old code
}

  //emp= new Array<Emp>();

  constructor(private empservice: EmpserviceService, public formbuilder: FormBuilder,public router:Router) { }


  createempform() {
    this.employeeform = this.formbuilder.group(
      {
        empid: [''],
        name: [''],
        city: [''],
        designation: [''],
        _id:['']

      });
  }



  showallemp(): void
   {
     debugger;

    this.empservice.detailemp().subscribe(
      (data: Emp[]) => 
      {
        debugger;
        console.log(data);
        this.emp = data;
      });
  }




  saveOrUpdate(employeeform): void
   {
     debugger;

    let formdata = employeeform.getRawValue();
    this.newemp = formdata;
    this.empservice.saveallemp(this.newemp).subscribe(
    (data: any) =>
     {
       debugger;
        console.log(data);
        this.statusCode = "200";
        //console.log("-----------");
        this.showallemp();
      }
    )
    this.employeeform.reset();
  }


  update(employeeform):void
   { 
     debugger;
     let formdata = employeeform.getRawValue();
     this.newemp = formdata;

      this.empservice.updateempdetails(this.newemp).subscribe(
           (data:any)=>
           {
             debugger;
             console.log(data);
             this.statusCode = "201";
            this.showallemp();
            this.isUpdate = false;
            this.employeeform.reset()
           }
         )


   }

  

   delete(emp:any):void
    {
      let confirmMsg = confirm("Are you sure want to delete?");
      if(confirmMsg)
      {
        this.empservice.deletProductById(emp._id).subscribe(
          (data:any)=>
          {
            this.statusCode = "400";
            this.showallemp();
          }
        )
      
      }
      
      
    
    }

    /*addNewProduct():void
    {
      debugger;
      console.log("inside..")
       this.router.navigate['/emp/newemp'];
    }*/




  ngOnInit()
   {
    this.createempform();
    this.showallemp();

  }

}
