import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
})
export class EmployeesComponent implements OnInit {
  chbox = new FormControl('');
  editbutton = new FormControl('');
  formgroup: FormGroup;
  
  constructor(private beService : BackendService, private router : Router) {
    this.formgroup = new FormGroup
    ({
      query : new FormControl('', [Validators.required])
    });
  }
  
  employees : any[] = [];
  static delete_selection : any[] = [];

  ngOnInit() 
  {
    this.beService.getEmployees().subscribe((data:any[]) =>
    {
      this.employees = data
    });
  }

   //checkbox selection to delete data
   //this 
   select_employee(array_index:any, emp_id:any, checked:boolean)
   {
     if(checked)
     {
        EmployeesComponent.delete_selection.push({ index:array_index,emp_id:emp_id });
     }
     else{
       let z : number = EmployeesComponent.delete_selection.indexOf({ index:array_index,emp_id:emp_id });
       EmployeesComponent.delete_selection.splice(z,1);
     }
   }



   //edit employee
   edit_employee(id:any)
   {
    this.beService.getEmployee(id)
    .subscribe((data:any) =>
    {
      this.beService.employee = data;
      this.router.navigate(['/admin/employee/edit']);
    });
   }

   //delete employee
   delete_employee()
   {
      if(EmployeesComponent.delete_selection.length > 0)
      {
          EmployeesComponent.delete_selection.forEach(function (selection) 
          { 
            this.beService.deleteEmployee(selection.emp_id)
                .subscribe((response:any) =>
                  {
                    this.employees.splice(selection.index, 1);
                    EmployeesComponent.delete_selection = [];
                  });
          },this);
      }
      else{
        alert("please select row first");
        return
      }
   
    }

    onSubmit():any
    {
      this.beService.searchEmployee(this.formgroup.controls.query.value)
      .subscribe((data:any[]) =>
      {
        if(data.length > 0)
        {
          this.employees = data;
        }
        else
        {
          alert("user not found");
          this.formgroup.controls.query.setValue("");
        }
  
      });
    }


}


