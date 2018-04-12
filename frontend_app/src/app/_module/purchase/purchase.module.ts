import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { PurchaseinvoiceComponent } from './purchaseinvoice/purchaseinvoice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PurchaseorderComponent, PurchaseinvoiceComponent]
})
export class PurchaseModule { }
