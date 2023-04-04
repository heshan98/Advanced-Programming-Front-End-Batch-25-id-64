import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeleteDialogBoxComponent } from './product-delete-dialog-box.component';

describe('ProductDeleteDialogBoxComponent', () => {
  let component: ProductDeleteDialogBoxComponent;
  let fixture: ComponentFixture<ProductDeleteDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeleteDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeleteDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
