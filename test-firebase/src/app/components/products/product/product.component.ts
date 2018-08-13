import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Service
import { ProductService } from '../../../services/product.service'

//Class Product
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm){
    if(productForm.value.$key == null){
      (<any>window).ga('send', 'event', {
        eventCategory: 'productCRUD',
        eventLabel: 'insertProduct',
        eventAction: 'insertProduct'
      });
      this.productService.insertProduct(productForm.value)
    }
    else {
      (<any>window).ga('send', 'event', {
        eventCategory: 'productCRUD',
        eventLabel: 'updateProduct',
        eventAction: 'updateProduct'
      });
      this.productService.updateProduct(productForm.value);
    }
    
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm){
    if(productForm != null){
      (<any>window).ga('send', 'event', {
        eventCategory: 'others',
        eventLabel: 'resetForm',
        eventAction: 'resetForm'
      });
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }

}
