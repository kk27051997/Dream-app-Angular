import { NgForm } from '@angular/forms';
import { Router, RouterModule, RouterState } from '@angular/router';
import { responsedata } from './../responsedata';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { commonservice } from '../common-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '../user.model';
import { tap } from 'rxjs/operators';
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new Subject<any>();
  @ViewChild('l') form : NgForm;
  error:boolean = false;
  errorMessage:string;
  constructor(public common:commonservice, public router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(l:NgForm){

    this.common.logindata(l).subscribe(
      (response:responsedata)=>{
        console.log(response);
        const users = new User(response.access_token,
          response.expires,
          response.issued,
          response.userName
          )
        this.user.next(users);
        console.log(users);
        this.error=false;
        this.errorMessage="";
        this.router.navigate(["home"]);
        localStorage.setItem("Token",response.access_token);
        localStorage.setItem("username",response.userName);
        
      },
      (error:HttpErrorResponse)=>{
        this.error=true;
        this.errorMessage = error.error.error_description;
        console.log(error.error.error_description);
      } 
      
    )

    

    
    
    if(!this.error){
      l.reset();
    }
  }
}
