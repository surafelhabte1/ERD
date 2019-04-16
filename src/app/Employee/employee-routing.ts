import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { AuthGarde } from '../AuthGarde';

const rou : Routes =  
[  
    {  
    path:'',
    component:DashboardComponent,
    canActivate: [AuthGarde]  
    },
    {
    path: 'employee',
    canActivateChild: [AuthGarde],
    children:
        [
        {
            path: 'new',
            component: NewemployeeComponent,
        },
        {
            path: 'list',
            component: EmployeesComponent,
        },
        {
            path: 'edit',
            component: EditemployeeComponent,
        },
        ]  
    }    
]

@NgModule({
  imports: [RouterModule.forChild(rou)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
