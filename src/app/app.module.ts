import { commonservice } from './common-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { Routes,RouterModule} from '@angular/router'; 
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path: '',redirectTo:'/login', pathMatch:'full'},
 { path: 'login', component: LoginComponent },
//children:[{path:'',component:LoginComponent}] },
{ path: 'register', component: RegisterComponent},

{path:'home',component:DetailsComponent},
//children:[{path:'',component:RegisterComponent}] },
  {path: '**',component:PageNotFoundComponent},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
  ],
  declarations: [
    AppComponent,
    DetailsComponent,
    RegisterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LoginComponent,
   
    
  ],
  
  providers: [commonservice,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
