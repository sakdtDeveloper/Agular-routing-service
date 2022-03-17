import { Component, OnInit } from '@angular/core';
import {Product} from '../model/Product';
import {CalculService} from '../services/calcul.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProducts: Product[];
  alertStock: number;
  constructor(private serviceCal: CalculService) { }

  ngOnInit(): void {
    this.listProducts = [
      {id: 1, title: 'Tshirt-1', quantity: 100, like: 0, price: 5 },
      {id: 2, title: 'Tshirt-2', quantity: 200, like: 0, price: 5 },
      {id: 3, title: 'Tshirt-3', quantity: 120, like: 0, price: 5 },
      {id: 4, title: 'Tshirt-4', quantity: 140, like: 0, price: 5 },
      {id: 5, title: 'Tshirt-5', quantity: 190, like: 0, price: 5 },
      {id: 6, title: 'Tshirt-6', quantity: 0, like: 0, price: 5 },
    ];
  }

  getAlertStock(){
    this.alertStock = this.serviceCal.getNumberOf(this.listProducts, 'quantity', 0 );
  }
}
