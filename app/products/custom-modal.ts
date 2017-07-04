import { Component, OnInit } from '@angular/core';

import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import {NgForm} from '@angular/forms';

import { IProduct } from './product';
import { ProductService } from './product.service';

export class AdditionCalculateWindowData extends BSModalContext {
  constructor(public num1: number, public num2: number) {
    super();
  }
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `
        <div class="container custom-modal-container">
         <form class="form-horizontal" [formGroup]="loginForm">
    <div class="form-group">
      <label class="control-label col-sm-4" for="productname">Name:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productname" formControlName="name">
      </div>

      <label class="control-label col-sm-4" for="productname">Code:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productcode" formControlName="code">
      </div>

      <label class="control-label col-sm-4" for="productdescription">Description:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productdescription" formControlName="description">
      </div>

      <label class="control-label col-sm-4" for="productprice">Price:</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="productprice" formControlName="price">
      </div>

      <label class="control-label col-sm-4" for="productreleasedate">Release Date:</label>
      <div class="col-sm-8">
        <input type="date" class="form-control" id="productreleasedate" formControlName="releasedate">
      </div>

      <label class="control-label col-sm-4" for="productstarrating">Star Rating:</label>
      <div class="col-sm-8">
        <input type="number" class="form-control" id="productstarrating" formControlName="starrating">
      </div>

      <label class="control-label col-sm-4" for="productimage">Image:</label>
      <div class="col-sm-8">
        <input type="file" class="form-control" id="productimage" formControlName="image">
      </div>
    </div>
    
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default" (click)="onSubmit(productEditor)">Save</button>
         <button type="submit" class="btn btn-default" (click)="onCancel()">Cancel</button>
      </div>
    </div>
  </form>
         </div>
        `
})
export class AdditionCalculateWindow implements ModalComponent<AdditionCalculateWindowData>, OnInit {
  context: AdditionCalculateWindowData;

  
  errorMessage: string;

  public loginForm = new FormGroup({
    name: new FormControl("", Validators.required),
    code: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    releasedate: new FormControl("", Validators.required),
    starrating: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
  });

  constructor(private _productService: ProductService, public dialog: DialogRef<AdditionCalculateWindowData>) {
    this.context = dialog.context;
   
  }

  ngOnInit(): void {
      
  }

  onKeyUp(value: any) {
   
    this.dialog.close();
  }

  onCancel() {
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return true;
  }

  onSubmit(productEditor: NgForm) {
    console.log(this.loginForm.value);
    this._productService.addProduct(this.loginForm.value)
              .subscribe(products => {},
                          error => this.errorMessage = <any>error);
    
  }
}
