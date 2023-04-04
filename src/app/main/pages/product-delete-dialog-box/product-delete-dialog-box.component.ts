import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EcommerceProductComponent } from 'app/main/apps/e-commerce/product/product.component';

@Component({
  selector: 'app-product-delete-dialog-box',
  templateUrl: './product-delete-dialog-box.component.html',
  styleUrls: ['./product-delete-dialog-box.component.scss']
})
export class ProductDeleteDialogBoxComponent implements OnInit {

    constructor(

        public dialogRef2: MatDialogRef<EcommerceProductComponent>,
    
      ) { }
      onNoClick(): void {
        this.dialogRef2.close();
      }
    
      ngOnInit() {
      }
    
      
    
    }