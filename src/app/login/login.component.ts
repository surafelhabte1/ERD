import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  formgroup: FormGroup;

  constructor(private beService:BackendService, private router:Router) 
  { 
    this.formgroup = new FormGroup({
      email : new FormControl('',[Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)])
    });
  }

  ngOnInit() {
  }

  onSubmit():any
  {
    this.beService.loginAuth(
      {
        email:this.formgroup.controls.email.value,
        password:this.formgroup.controls.password.value
      })
    .subscribe((data:any[]) =>
    {
      
      if(data.length > 0)
      {
        this.beService.user_logged_In = true;
        this.router.navigate(['/admin']);
      }
      else
      {
        alert("user not found");
        this.formgroup.controls.email.setValue("");
        this.formgroup.controls.password.setValue("");
      }

    });
  }
}
