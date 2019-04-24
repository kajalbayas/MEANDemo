import { Directive,ElementRef,AfterViewInit,HostListener, HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appElementhighlight]'
})
export class ElementhighlightDirective implements AfterViewInit
 {
@Input() 
inputcolor:string='';

  color:string='green';

  constructor(private elementref:ElementRef)
   { }

   @HostBinding('style.color') backgroundColor:string;
   
   @HostListener('mouseover') onMouseOver()
   {  
    this.backgroundColor=this.inputcolor;
    //this.eleRef.nativeElement.style.color="White";  
    }  

   ngAfterViewInit()
   {
     this.elementref.nativeElement.style.color=this.color;
   }
}
