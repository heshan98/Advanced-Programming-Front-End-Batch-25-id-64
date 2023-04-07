import { NgModule } from '@angular/core';

import { LoginModule } from 'app/main/pages/authentication/login/login.module';

import { RegisterModule } from 'app/main/pages/authentication/register/register.module';




import { RouterModule, Routes } from '@angular/router';

import { ProfileModule } from 'app/main/pages/profile/profile.module';


import { ProductDeleteDialogBoxComponent } from './product-delete-dialog-box/product-delete-dialog-box.component';

import { RegisterComponent } from './authentication/register/register.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
    imports: [
        // Authentication
        LoginModule,

        RegisterModule,


     
        

        // Invoices




        // Profile
        ProfileModule,

        // Search


        // Faq
 

        // Knowledge base

        RouterModule.forChild([

    
          
           
        ])
       

      

    ],
    
    declarations: [ProductDeleteDialogBoxComponent, CustomerManagementComponent, CustomerDetailsComponent] ,
    entryComponents:[ProductDeleteDialogBoxComponent]

   
})
export class PagesModule
{

}
