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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TokenInterceptor } from './token.interceptor';
import { CreateInventoryComponent } from './pages/crud-inventary/dialogs/create-inventory.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CrudClientsComponent,
    CrudProductsComponent,
    CrudInventaryComponent,
    CrudBillingComponent,
    CrudPaymentTypeComponent,
    CreateInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
