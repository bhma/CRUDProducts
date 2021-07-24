import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
    declarations: [
        MenuBarComponent, 
        FooterComponent, HomeComponent, LoginComponent, CustomerDetailComponent, CustomersComponent, OrdersComponent, OrderDetailComponent, ProductsComponent, ProductDetailComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        PaginationModule,
        ModalModule
    ],
    exports: [
        MenuBarComponent,
        FooterComponent
    ],
    providers: []
})
export class ViewsModule { }
