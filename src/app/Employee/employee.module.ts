import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGarde } from 'src/app/AuthGarde';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';


const rou :Routes =  
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
        },
      
           
]  

@NgModule({
  declarations: 
  [
    NewemployeeComponent,
    DashboardComponent,
    EmployeesComponent,
    EditemployeeComponent

  ],
  imports: 
  [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    RouterModule.forChild(rou)  
  ],
  providers: [PageService, SortService, FilterService, GroupService],

})
export class EmployeeModule { }
