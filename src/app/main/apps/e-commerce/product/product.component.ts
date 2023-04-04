import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { Product } from 'app/main/apps/e-commerce/product/product.model';
import { EcommerceProductService } from 'app/main/apps/e-commerce/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { productsService } from 'app/main/services/product.service';
import { IProduct } from 'app/main/services/models/product-model';
import { MatDialog } from '@angular/material';
import { ProductDeleteDialogBoxComponent } from 'app/main/pages/product-delete-dialog-box/product-delete-dialog-box.component';

@Component({
    selector: 'e-commerce-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EcommerceProductComponent implements OnInit {
    productId;
    product: Product;
    pageType: string;
    productForm: FormGroup;
    editForm = this._formBuilder.group({
        id: [],
        productDescription: [],
        productName: [],
        category: [],
        image1: [],
        image2: [],
        image3: [],
        price: [],
        quantity: []




    });
    constructor(

        private _formBuilder: FormBuilder,
        protected activatedRoute: ActivatedRoute,
        public dialog: MatDialog,
        private _matSnackBar: MatSnackBar,
        private productService: productsService
    ) {

    }


    ngOnInit(): void {
        this.activatedRoute.params.subscribe(res => {
           this.productId= (res['id'])
            this.productService.getProductsById(res['id']).subscribe(res => {
               // alert(res)
                this.updateForm(res)

            })

        })

    }

    updateForm(product: IProduct) {

        this.editForm.patchValue({
            id: product.id,
            productDescription: product.productDescription,
            productName: product.productName,
            price: product.price,
            image1: product.image1,
            image2: product.image2,
            image3: product.image3,
            quantity: product.quantity
        });

    }
    private createFromForm(): IProduct {
        return {
    
          ...new Product(),
          id: this.editForm.get(['id']).value,
          productName:this.editForm.get(['productName']).value,
          productDescription:this.editForm.get(['productDescription']).value,
          quantity:this.editForm.get(['quantity']).value,
          price:this.editForm.get(['price']).value,
         };
      }

submit(){
    const submit=this.createFromForm();
this.productService.create(submit).subscribe(res=>{

})
}

deleteProduct() {
    

    const dialogRef2 = this.dialog.open(ProductDeleteDialogBoxComponent, {
      width: '40%',
      height: "25%",
      data: {},
    })
    dialogRef2.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == true) {
       this.productService.delete(this.productId).subscribe(res=>{
        
       })

      }
      else {
        
        //nothing
      }

    })
  }

}
