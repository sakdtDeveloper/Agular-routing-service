import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProducts: Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProducts = [
      {id: 1, title: 'Tshirt', quantity: 100, like: 0, price: 5 },
      {id: 2, title: 'Tshirt', quantity: 100, like: 0, price: 5 },
      {id: 3, title: 'Tshirt', quantity: 100, like: 0, price: 5 },
      {id: 4, title: 'Tshirt', quantity: 100, like: 0, price: 5 },
      {id: 5, title: 'Tshirt', quantity: 100, like: 0, price: 5 },
      {id: 6, title: 'Tshirt', quantity: 100, like: 0, price: 5 },
    ];
  }

}
