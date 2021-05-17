import { commonservice } from './../common-service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') form : NgForm;

postarray = [];
error:boolean=false;;
errorMessage:string;
constructor( public common:commonservice){}
ngOnInit(){


}

  onSubmit(f:NgForm){
    this.common.postdata(f).subscribe((response)=>{
      alert('User registered successfully');
      console.log(response);
      this.error=false;
        this.errorMessage="";
    },
    (error:HttpErrorResponse)=>{
      if(error.error.ModelState["model.ConfirmPassword"]){
        this.error = true;
        this.errorMessage = error.error.ModelState["model.ConfirmPassword"][0];
        console.log(error.error.ModelState["model.ConfirmPassword"][0]);
      }
      else{
        this.error = true;
        this.errorMessage=error.error.ModelState[""][0];
        console.log(error.error.ModelState[""][0]);
      }
    });
    
  
    if(!this.error){
      f.reset();
    }

}
cleardata(){
this.form.reset();
}
 /* getdata(){
  this.common.fetchdata().subscribe((arrayys)=>{
    this.postarray = arrayys;
    console.log(this.postarray);
  });
}  */
 
}
