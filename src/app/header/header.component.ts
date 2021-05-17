import { LoginComponent } from './../login/login.component';
import { commonservice } from './../common-service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import { User } from '../user.model';
//import { threadId } from 'node:worker_threads';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
 private users:Subscription;
 is_authenticated:boolean //=false;
  constructor(public common:commonservice,public login:LoginComponent) { }

  ngOnInit() {
  this.users = this.login.user.subscribe(user=>{
    this.is_authenticated=!!user;
    console.log(user);
  });
  console.log(this.users);
  }


 ngOnDestroy(){
   this.users.unsubscribe();
 }
  

  
onLogout(){
  this.common.onLogout();
}
}

