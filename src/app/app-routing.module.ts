import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGarde } from './AuthGarde';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    //lasy loading
    path: 'admin',
    loadChildren: './Employee/employee.module#EmployeeModule',
    canLoad: [AuthGarde],
  },
  { 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  {
    //404
    path: '**',
    component: NotFoundComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
