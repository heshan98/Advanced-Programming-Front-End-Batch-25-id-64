import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/main/services/user.service';
// import { StorageService } from '../../../services/storage.service';
import { MatSnackBar } from '@angular/material';
import { UserAuthService } from 'app/main/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit

{
    loginForm: FormGroup;
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private userService:UserService,
        // private storageService: StorageService,
        private matSnackBar: MatSnackBar,
        private userAuthService:UserAuthService,
        private router:Router
    )
    {
        //Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

   
    ngOnInit(): void
    {
       
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required]],
            password: ['', Validators.required]
        });
    } 
    submit(){
    //    alert(this.loginForm.get(['email']).value) 
       const user=this.loginForm.get(['email']).value
       const password=this.loginForm.get(['password']).value
       this.userService.login(user,password).subscribe(res=>{
        // res.accessToken
        console.log(res)
        this.userAuthService.setLoggedId(res.id)
        this.userAuthService.setRoles(res.roles[0])
        this.userAuthService.setToken(res.accessToken)
        const role=res.roles[0]
        if(role==='ROLE_ADMIN'){
            this.router.navigate(['/products' ]);

        }

       })
    }
     
    reloadPage(): void {
        window.location.reload();
      }
}
