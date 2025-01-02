import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home-component/home-component.component';
import { GitsListComponent } from './modules/gifts/gits-list/gits-list.component';
import { DonorListComponent } from './modules/donor-list/donor-list.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'gifts',component:GitsListComponent},
  {path:'donors',component:DonorListComponent},
  {path:'purchase',component:PurchaseComponent},
  {path:'pay',component:PaymentComponent},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
