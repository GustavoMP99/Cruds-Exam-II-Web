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
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { PaymentTypeDialog } from "./pages/crud-payment-type/dialogs/payment-type-dialog.component"
import { CreateBillDialog } from "./pages/crud-billing/dialogs/create-bill-dialog.component"
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



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
    PaymentTypeDialog,
    CreateBillDialog,
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
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
