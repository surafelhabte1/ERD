import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  formgroup: FormGroup;

  constructor(private beService:BackendService, private router :Router) 
  { 
    this.formgroup = new FormGroup({
      fullName : new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(2)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]),
      repassword : new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit():any
  {

    //console.log(this.formgroup.controls.fullName.value);
    return this.beService.userSignup(
      { 
        id:"",
        fullname : this.formgroup.controls.fullName.value,
        email : this.formgroup.controls.email.value,
        password : this.formgroup.controls.password.value,  
      })
        .subscribe(response => {
          alert("successfully registerd new user");
          this.router.navigate(['login']);
        });    

  }
}
