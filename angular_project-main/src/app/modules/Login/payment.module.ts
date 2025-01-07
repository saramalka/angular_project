
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

import { NewUserComponent } from './new-user/new-user.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { UserService } from '../../service/userService';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [PaymentComponent, NewUserComponent, ExistingUserComponent],
  imports: [
    CommonModule,
    DataViewModule, InputNumberModule,  MessageModule,     
    DividerModule, ButtonModule, InputTextModule,ReactiveFormsModule
  ],
  providers: [ProductService,UserService],
  exports: [PaymentComponent], 
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentModule {}