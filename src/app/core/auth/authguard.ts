import { Injectable } from '@angular/core';
import { userService } from '../user/user.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(
        private userService: userService,
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        if(this.userService.isLogged()){
            this.router.navigate(['user',this.userService.getUserName()]);
            return false;
        }
        return true;
    }
}