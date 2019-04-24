import { Component, OnInit,Input } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControlName,FormBuilder,FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit 
{
  @Input()
  titlepage:string='';



 

  constructor(private formbuilder: FormBuilder,private router:Router) { }



 // enquiryform: FormGroup;
 
  //name :string='';
  /*createform(): void {
    this.enquiryform = this.formbuilder.group(
      {
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        emailaddress: new FormControl(''),
        query: new FormControl(''),

      }
    )
  }

  save(enquiryform):void
  {
    debugger;

    let formdata = this.enquiryform.getRawValue();
    let fname=this.enquiryform.get('firstname').value;
      console.log(fname);
    this.name=fname;
    this.outputvar.emit(this.name);
    this.router.navigate(['/home',this.name]);
    
  }*/

/*  eventemitfunct():void
{
  debugger;
  this.outputvar.emit(this.name);

}*/



  ngOnInit()
   {
     //this.createform();
   }

}
