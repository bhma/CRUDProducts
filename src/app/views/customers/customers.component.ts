import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ICustomer } from 'src/app/model/Customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    readonly ITENS_PER_PAGE: number = 10;
    readonly MAX_SIZE: number = 5;
    readonly DIRECTION_LINKS: boolean = true;
    readonly BOUNDARY_LINKS: boolean = true;
    TOTAL_ITEMS: number;
    FLAG: string = 'newCustomer';
    customerList: ICustomer[];
    listPage: ICustomer[];

    constructor(
        // private cService: CustomerService,
    ) { }

    ngOnInit(): void {
        // this.cService.getCustomers().subscribe(data => {
        //     this.customerList = data;
        //     this.TOTAL_ITEMS = this.customerList.length;
        //     this.listPage = this.customerList.slice(0, this.ITENS_PER_PAGE);
        // });
    }

    pageChanged(event: PageChangedEvent){
        // const startItem = (event.page - 1) * event.itemsPerPage;
        // const endItem = event.page * event.itemsPerPage;
        // this.listPage = this.customerList.slice(startItem, endItem);
    }

}
