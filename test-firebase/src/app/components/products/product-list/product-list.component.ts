import { Component, OnInit } from '@angular/core';

//Service
import { ProductService } from '../../../services/product.service'

//Class Product
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item =>{
        this.productList = [];
        item.forEach(element =>{
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.productList.push(x as Product);
        });
      });
  }

  onEdit(product:Product){
    (<any>window).ga('send', 'event', {
      eventCategory: 'productCRUD',
      eventLabel: 'editProduct',
      eventAction: 'editingProduct'
    });
    this.productService.selectedProduct = Object.assign({},product); 
  }

  onDelete($key: string){
    (<any>window).ga('send', 'event', {
      eventCategory: 'productCRUD',
      eventLabel: 'deleteProduct',
      eventAction: 'deletingProduct'
    });
    this.productService.deleteProduct($key);
  }

}
