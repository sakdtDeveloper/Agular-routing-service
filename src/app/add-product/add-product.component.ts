import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product;
  listProducts: Product[];
  constructor() { }

  ngOnInit(): void {
    this.product = new Product();
    this.listProducts = [];
  }

  save(){
   this.listProducts.push(this.product);
   console.log(this.listProducts);
   this.product = new Product();
   console.log(this.product);
  }

}
