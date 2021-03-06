import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DetailsProductComponent } from './details-product/details-product.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    DetailsProductComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
