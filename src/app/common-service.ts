import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable()
export class commonservice {
    public is_authenticated:boolean=false;
constructor(public http:HttpClient){}
url:any='http://localhost:50000';
  postdata(form:NgForm){
 

    return this.http.post(this.url+'/api/Account/Register',form.value)

  /* this.http.post('https://test-project-a4911-default-rtdb.firebaseio.com/posts.json',form.value).subscribe(
      (response)=>{
      //console.log(response);
  });
 */
    }

logindata(form:NgForm){
var data = "username="+form.value.username+"&password="+form.value.password+"&grant_type=password";
var reqheader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
this.is_authenticated = true;
return this.http.post(this.url+'/Token',data,{headers:reqheader});

}

onLogout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("username");
    this.is_authenticated = false;
}
    
    
    
    
    
    
    /* fetchdata(){
         return this.http.get('https://test-project-a4911-default-rtdb.firebaseio.com/posts.json')
         .pipe(map((resolvedata:[])=>{
             let postarray =[];
             for(const keys in resolvedata){
                 let temp=resolvedata[keys];
                 postarray.push(temp);
             }

             return postarray;
             
         })
         
         );
            
        
    } */
}