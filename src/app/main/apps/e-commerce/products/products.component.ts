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

@Component({
    selector     : 'e-commerce-products',
    templateUrl  : './products.component.html',
    styleUrls    : ['./products.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EcommerceProductsComponent implements OnInit
{
   listProducts!:IProduct[];
   dataSource:any;
    displayedColumns = ['id','name','price'];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

 

    constructor(private productService:productsService,
        private userServive:UserService
        
    )
    {
  
      
    }

  
    ngOnInit(): void
    {
        this.getData();
    }
    getData(){
        this.productService.getProducts().subscribe(res=>{
            this.listProducts=res
            this.dataSource= new MatTableDataSource(this.listProducts)
            console.log(this.listProducts)

        }) 
    }
}


