import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

import { AnalyticsDashboardService } from 'app/main/apps/dashboards/analytics/analytics.service';
import { UserService } from 'app/main/services/user.service';

@Component({
    selector     : 'analytics-dashboard',
    templateUrl  : './analytics.component.html',
    styleUrls    : ['./analytics.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AnalyticsDashboardComponent implements OnInit
{
   

   
    constructor(
      
        private userService:UserService,
    )
    { 
     
      
    }

 
    ngOnInit(): void
    {
        this.forUser();
     
    }
    forUser(){
        this.userService.forAdmin().subscribe((res)=>{})
    }

    
}

