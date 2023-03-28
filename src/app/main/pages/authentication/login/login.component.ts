import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/main/services/user.service';
import { StorageService } from '../../../services/storage.service';
import { MatSnackBar } from '@angular/material';

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
        private storageService: StorageService,
        private matSnackBar: MatSnackBar,
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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        if (this.storageService.isLoggedIn()) {
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
          }

        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }
    submit(){
    //    alert(this.loginForm.get(['email']).value) 
       const user=this.loginForm.get(['email']).value
       const password=this.loginForm.get(['password']).value
       this.userService.login(user,password).subscribe({
        next: data => {
            this.storageService.saveUser(data);
            console.log(data)
    
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
            console.log(this.roles[0])
            if(this.roles[0]==='ROLE_ADMIN'){
             //  alert('hi')

            }
            // this.reloadPage();
          },
          error: err => {
            this.errorMessage = err.error.message;
            if (this.errorMessage) {
                this.matSnackBar.open(
                  "This Account does not exist", 'OK', {
                  verticalPosition: 'top',
                  duration: 4000
                })
                return
              }
            console.log(this.errorMessage)
            this.isLoginFailed = true;
          }
        });
      }
    reloadPage(): void {
        window.location.reload();
      }
}
