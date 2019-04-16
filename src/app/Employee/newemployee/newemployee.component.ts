import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
})
export class NewemployeeComponent implements OnInit {
  formgroup: FormGroup;

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
  }


  onSubmit():any
  {

    return this.beService.createEmployee(
      { 
        id:"",
        name : this.formgroup.controls.name.value,
        mname : this.formgroup.controls.mName.value,
        lname : this.formgroup.controls.lname.value, 
        tel : this.formgroup.controls.tel.value,
        departement : this.formgroup.controls.departement.value,
        position : this.formgroup.controls.position.value  

      })
        .subscribe(response => {
          alert("successfully registerd new Employee");
          this.router.navigate(['/employee/list']);

      });    

  }

}
