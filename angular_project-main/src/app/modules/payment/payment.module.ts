
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/productservice';
import { DataViewModule } from 'primeng/dataview';
import {  TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from "./payment.component"
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    DataViewModule,        
    DividerModule, ButtonModule, InputTextModule
  ],
  providers: [ProductService],
  exports: [PaymentComponent], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentModule {}