import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private userAuthService: UserAuthService, private router: Router, private userService: UserService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.userAuthService.getToken() !== null) {
            const role = route.data['roles'] as Array<string>;
            console.log(role,'hi')
            if (role) {
                const match = this.userService.roleMatch(role);
                console.log(this.userService.roleMatch(role),'test')
                console.log(match,'hi2')
                if (match) { 
                    return true;
                } else {
                    // this.router.navigate(['/authentication/login']);
                    return false;
                }

            }

        }
        this.router.navigate(['/authentication/login']);
        return false;
    }

}
