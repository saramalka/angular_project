import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { giftListModule } from './modules/gifts/gifts-list.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PaymentModule } from './modules/payment/payment.module';
import { DonorListModule } from './modules/donor-list/donor-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
    
  ],
  imports: [
    NoopAnimationsModule,
    BrowserAnimationsModule, 
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    giftListModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,PaymentModule,DonorListModule

  ],
  providers: [
    provideClientHydration(withEventReplay()),
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
