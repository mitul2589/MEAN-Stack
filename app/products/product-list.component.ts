import { Component, OnInit, ViewContainerRef, ViewEncapsulation }  from '@angular/core';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Overlay, overlayConfigFactory } from 'angular2-modal';

import { AdditionCalculateWindow, AdditionCalculateWindowData } from './custom-modal';

import { IProduct } from './product';
import { ProductService } from './product.service';

import {NgForm} from '@angular/forms';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
   
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService, vcRef: ViewContainerRef, public modal: Modal) {
        //modal.
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    openProductEditor(): void {
        this.modal.open(AdditionCalculateWindow, overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
    }

    onSubmit(productEditor: NgForm): void {
         console.log(productEditor);
         debugger;
    }
}
