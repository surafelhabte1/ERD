
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router, CanActivateChild, CanLoad, Route, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { BackendService } from './service/backend.service';

@Injectable()
export class AuthGarde implements CanActivate , CanActivateChild, CanLoad
{
    constructor(private beService : BackendService , private router : Router) {}

    canLoad(route: Route, segments: UrlSegment[]): boolean 
    {
        if(this.beService.user_logged_In)
        {
            return true;
        }
         else
         {
            this.router.navigate(['/login']);
            return false
         }
    }

    canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) : boolean
    {
        if(this.beService.user_logged_In)
        {
            return true;
        }
         else
         {
            this.router.navigate(['/login']);
            return false
         }
    }   
    canActivateChild(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) : boolean
    {
        if(this.beService.user_logged_In)
        {
            return true;
        }
         else
         {
            this.router.navigate(['/login']);
            return false

         }
    }
  
 
}