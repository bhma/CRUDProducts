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



@NgModule({
    declarations: [
        MenuBarComponent, 
        FooterComponent, HomeComponent, LoginComponent, CustomerDetailComponent, CustomersComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        PaginationModule
    ],
    exports: [
        MenuBarComponent,
        FooterComponent
    ]
})
export class ViewsModule { }
