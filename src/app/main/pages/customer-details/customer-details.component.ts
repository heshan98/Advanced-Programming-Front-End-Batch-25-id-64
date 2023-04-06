import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { IRegister } from 'app/main/services/models/register-model';
import { registerService } from 'app/main/services/register.service';
import * as moment from 'moment';
import { ProductDeleteDialogBoxComponent } from '../product-delete-dialog-box/product-delete-dialog-box.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class CustomerDetailsComponent implements OnInit {
    id;
    editForm = this._formBuilder.group({
        id: [],
        email:[],
        name:[],
        dateOfBirth:[],
        loanBalance:[],
        budget:[],
        usedAmount:[],





       

    });


   

  constructor(
    private _formBuilder: FormBuilder,
    private registerService:registerService,
    protected activatedRoute: ActivatedRoute,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => { res['id']
    this.id=res['id']
    this.registerService.getCustomersById(res['id']).subscribe(res=>{
        this.updateForm(res)

    })
})
this.editForm.patchValue({
    dateOfBirth: moment().format('DD-MM-YYYY'),
  });
    
  }
  updateForm(product: IRegister) {

    this.editForm.patchValue({
        id: product.id,
        email: product.email,
        name: product.name,
        dateOfBirth: product.dateOfBirth,
        loanBalance: product.loanBalance,
        budget: product.budget,
      
    });

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
       this.registerService.delete(this.id).subscribe(res=>{
        
       })

      }
      else {
        
        //nothing
      }

    })
  }

}
