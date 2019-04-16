import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private beService : BackendService , private router : Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.beService.user_logged_In = false;
    this.router.navigate(['/login']);
  }
}
