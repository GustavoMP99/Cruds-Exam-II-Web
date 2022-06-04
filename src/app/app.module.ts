import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CrudClientsComponent } from './pages/crud-clients/crud-clients.component';
import { CrudProductsComponent } from './pages/crud-products/crud-products.component';
import { CrudInventaryComponent } from './pages/crud-inventary/crud-inventary.component';
import { CrudBillingComponent } from './pages/crud-billing/crud-billing.component';
import { CrudPaymentTypeComponent } from './pages/crud-payment-type/crud-payment-type.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CrudClientsComponent,
    CrudProductsComponent,
    CrudInventaryComponent,
    CrudBillingComponent,
    CrudPaymentTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
