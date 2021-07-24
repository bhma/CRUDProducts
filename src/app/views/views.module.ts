import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations: [
        MenuBarComponent, 
        FooterComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        MenuBarComponent,
        FooterComponent
    ]
})
export class ViewsModule { }
