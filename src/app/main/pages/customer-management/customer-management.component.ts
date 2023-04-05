import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';


import { takeUntil } from 'rxjs/internal/operators';
import { productsService } from 'app/main/services/product.service';
import { IProduct } from 'app/main/services/models/product-model';
import { UserService } from 'app/main/services/user.service';
import { MatTableDataSource } from '@angular/material';
import { registerService } from 'app/main/services/register.service';


@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class CustomerManagementComponent implements OnInit {
    
        listProducts!:IProduct[];
        dataSource:any;
         displayedColumns = ['id','email','name','description','price','quantity'];
     
         @ViewChild(MatPaginator, {static: true})
         paginator: MatPaginator;
     
         @ViewChild(MatSort, {static: true})
         sort: MatSort;
     
         @ViewChild('filter', {static: true})
         filter: ElementRef;
     
      
     
         constructor(private productService:productsService,
             private userServive:UserService,
             private registerService:registerService
             
         )
         {}
     
       
         ngOnInit(): void
         {
             this.getData();
         }
         getData(){
             this.registerService.getCustomers().subscribe(res=>{
             

            //    modifiedDate:moment(block.modifiedDate).format('DD-MM-YYYY HH:mm'),
                 this.listProducts=res
                 console.log(this.listProducts)
                 this.listProducts
                 this.dataSource= new MatTableDataSource(this.listProducts)
            
     
             }) 
         }
     }
     
     
     