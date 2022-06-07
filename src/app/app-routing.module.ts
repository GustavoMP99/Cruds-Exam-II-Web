import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CrudBillingComponent } from './pages/crud-billing/crud-billing.component';
import { CrudClientsComponent } from './pages/crud-clients/crud-clients.component';
import { CrudInventaryComponent } from './pages/crud-inventary/crud-inventary.component';
import { CrudProductsComponent } from './pages/crud-products/crud-products.component';
import { CrudPaymentTypeComponent } from './pages/crud-payment-type/crud-payment-type.component';


const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'crudBilling', component:CrudBillingComponent},
  {path:'crudClients', component:CrudClientsComponent},
  {path:'crudInventary', component:CrudInventaryComponent},
  {path:'crudProducts', component:CrudProductsComponent},
  {path:'crudPaymentType', component:CrudPaymentTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
