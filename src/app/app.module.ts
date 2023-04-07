import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import 'hammerjs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatTabsModule} from '@angular/material/tabs';
import { fuseConfig } from 'app/fuse-config';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { LoginComponent } from './main/pages/authentication/login/login.component';
import { httpInterceptorProviders } from './main/pages/helpers/http.interceptor';
import { AuthGuard } from './main/Auth/auth.guard';
import { AuthInterceptor } from './main/Auth/auth.intercepter';
import { UserService } from './main/services/user.service';
import { ProductDeleteDialogBoxComponent } from './main/pages/product-delete-dialog-box/product-delete-dialog-box.component';

import { RegisterComponent } from './main/pages/authentication/register/register.component';
import { CustomerManagementComponent } from './main/pages/customer-management/customer-management.component';
import { CustomerDetailsComponent } from './main/pages/customer-details/customer-details.component';
import { EcommerceProductComponent } from './main/apps/e-commerce/product/product.component';
import { EcommerceProductsComponent } from './main/apps/e-commerce/products/products.component';
import { AnalyticsDashboardComponent } from './main/apps/dashboards/analytics/analytics.component';
import { MatGridList, MatGridListModule } from '@angular/material';
import { ProjectDashboardComponent } from './main/apps/dashboards/project/project.component';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/apps/apps.module#AppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/pages/pages.module#PagesModule'
    },
    // {
    //     path        : 'ui',
    //     loadChildren: './main/ui/ui.module#UIModule'
    // },
    {
        path        : 'documentation',
        loadChildren: './main/documentation/documentation.module#DocumentationModule'
    },




    {path: 'test/test',
    component: RegisterComponent,} ,
    {path: 'management/customers',
    component: CustomerManagementComponent,} ,

    {path: 'management/customers/id/:id',
    component: CustomerDetailsComponent,} ,

    {path:'product/:id',component:EcommerceProductComponent},

    {path:'products',component:EcommerceProductsComponent},

   












 










    {
        path        : 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    
        {
            path: '',
            redirectTo: '/authentication/login',
            pathMatch: 'full'
        },
    
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProductDeleteDialogBoxComponent,
     
        RegisterComponent,
        CustomerManagementComponent,
        CustomerDetailsComponent,
        EcommerceProductComponent,
        EcommerceProductsComponent,
    
        
    ],

    imports     : [
        BrowserModule,
        MatSnackBarModule,
        MatDialogModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,

        
       
       
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
       
        // Material moment date module
        MatMomentDateModule,
        RouterModule.forRoot([
         
            // {path: 'crisis-list', component: CrisisListComponent},
            // {path: 'heroes-list', component: HeroesListComponent},
            // {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
            {path: '**', component: LoginComponent}  //first page
          ]),
        // Material
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule
    ],
    providers: [AuthGuard,
        {
            provide:HTTP_INTERCEPTORS,
            useClass:AuthInterceptor,
            multi:true
        },
    UserService],
    bootstrap   : [
        AppComponent
    ],
    entryComponents:[ProductDeleteDialogBoxComponent]
})
export class AppModule
{
}
