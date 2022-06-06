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
import { CreateCustomersComponent } from './pages/crud-clients/dialogs/create-customers.component';
import { CreateProductsComponent } from './pages/crud-products/dialogs/create-products.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CrudClientsComponent,
    CrudProductsComponent,
    CrudInventaryComponent,
    CrudBillingComponent,
    CrudPaymentTypeComponent,
    CreateInventoryComponent,
    CreateCustomersComponent,
    CreateProductsComponent
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
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
