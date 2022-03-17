import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddProductComponent} from './add-product/add-product.component';
import {DetailsProductComponent} from './details-product/details-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add_product', component: AddProductComponent },
  { path: 'home/:id', component: DetailsProductComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
