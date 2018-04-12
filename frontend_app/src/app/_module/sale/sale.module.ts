import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleorderComponent } from './saleorder/saleorder.component';
import { SaleinvoiceComponent } from './saleinvoice/saleinvoice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SaleorderComponent, SaleinvoiceComponent]
})
export class SaleModule { }
