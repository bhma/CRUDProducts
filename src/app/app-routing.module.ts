import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './views/customer-detail/customer-detail.component';
import { CustomersComponent } from './views/customers/customers.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { OrderDetailComponent } from './views/order-detail/order-detail.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    
    { path: 'customers', component: CustomersComponent },
    { path: 'customer/:id', component: CustomerDetailComponent },

    { path: 'orders', component: OrdersComponent },
    { path: 'order/:id', component: OrderDetailComponent },
    
    { path: 'products', component: ProductsComponent },
    { path: 'product/:id', component: ProductDetailComponent },

    { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
