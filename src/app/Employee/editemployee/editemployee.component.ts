import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendService } from '../../service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  formgroup: FormGroup;
  employee :any;

  constructor(private beService:BackendService, private router:Router) 
  {
     this.formgroup = new FormGroup({ 
      name : new FormControl('',[Validators.required]),
      mName : new FormControl('',[Validators.required]),
      lname : new FormControl('',[Validators.required]),
      tel : new FormControl('',[Validators.required]),
      departement : new FormControl('',[Validators.required]),
      position : new FormControl('',[Validators.required])
      
    });
    
   }

  ngOnInit() {
    this.employee = this.beService.employee;
    
    this.formgroup.controls.name.setValue(this.employee.name);
    this.formgroup.controls.mName.setValue(this.employee.mname);
    this.formgroup.controls.lname.setValue(this.employee.lname);
    this.formgroup.controls.tel.setValue(this.employee.tel);
    this.formgroup.controls.departement.setValue(this.employee.departement);
    this.formgroup.controls.position.setValue(this.employee.position);
  }


  onSubmit():any
  {
    return this.beService.updateEmployee(
      { 
        id:this.employee.id,
        name : this.formgroup.controls.name.value,
        mname : this.formgroup.controls.mName.value,
        lname : this.formgroup.controls.lname.value, 
        tel : this.formgroup.controls.tel.value,
        departement : this.formgroup.controls.departement.value,
        position : this.formgroup.controls.position.value  

      })
        .subscribe(response => {
          alert("successfully update employee Information");
          this.router.navigate(['/admin/employee/list']);

      });    

  }

}
