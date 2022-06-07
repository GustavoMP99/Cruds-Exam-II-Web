import { Component, Inject, OnInit } from "@angular/core"
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BillingService } from "../../../services/billing.service"
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'create-inventory',
  templateUrl: './create-bill-dialog.component.html'
})
export class CreateBillDialog implements OnInit {

  isCreate: boolean = true;

  billModel: any = {
    date: new Date()
  }

  productModel: any = {}

  customers: any[] = []

  paymentTypes: any[] = []

  products: any[] = []

  billProducts = new MatTableDataSource();

  displayedColumns: any[] = [];

  constructor( private _billingService: BillingService, 
    private dialogRef: MatDialogRef<CreateBillDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.getPaymentTypes();
    this.getProducts();
    if (this.data !== null) {
      this.isCreate = false;
      this.displayedColumns = ['name', 'price', 'tax', 'quantity']
      this.getBillById(this.data);
    } else {
      this.displayedColumns = ['name', 'price', 'tax', 'quantity', 'actions']
    }
  }

  getBillById = ( id: number ) => {
    this._billingService.getById( id ).subscribe({
      next: ( res: any ) => {
        res.id_customer = res.customer.id_card;
        res.id_payment_type = res.payment_type.id_payment_type;
        this.billModel = res;
      },
      error: ( err: any ) => { console.log(err) }
    });
  }

  getCustomers = () => {
    this._billingService.getCustomers().subscribe({
      next: ( res: any ) => {
        this.customers = res.rows;
      },
      error: ( err: any ) => {
        console.log(err);
      }
    });
  }

  getPaymentTypes = () => {
    this._billingService.getPaymentTypes().subscribe({
      next: ( res: any ) => {
        this.paymentTypes = res.rows;
      },
      error: ( err: any ) => {
        console.log(err);
      }
    });
  }

  getProducts = () => {
    this._billingService.getProductsInStock().subscribe({
      next: ( res: any ) => {
        this.products = res.rows.filter( (element: any) => element.quantity > 0);
      },
      error: ( err: any ) => {
        console.log(err);
      }
    });
  }

  addProductToBill = () => {

    const data: any[] = [...this.billProducts.data]

    data.push({...this.productModel})

    this.productModel = {};

    this.billProducts.data = data;

    this.calculateTotals(data);

  }

  deleteProduct = ( index: number ) => {

    const data: any[] = [...this.billProducts.data]

    data.splice(index, 1);

    this.billProducts.data = data;

    this.calculateTotals(data);

  }

  create = () => {

    const data: any[] = [...this.billProducts.data];

    if (data.length === 0) return;

    this.billModel.details = data.map(element => {
      return {
        id_product: element.product.product.id_product,
        quantity: element.quantity
      }
    });

    this._billingService.create( {...this.billModel } ).subscribe({
      next: ( res: any ) => {},
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Success', 'Bill created', 'success');
          this.dialogRef.close('reload');
        } else {
          Swal.fire('Error', 'An error has ocurred', 'error');
        }
      }
    });
  }

  calculateTotals = ( items: any[] ) => {

    let total = 0;

    let subtotal = 0;

    let taxes = 0;

    items.forEach( item => {

      const itemSubtotal = item.product.product.price * item.quantity;

      let itemTaxes = 0;

      if (item.product.taxed) {
        itemTaxes = (item.product.product.price * (item.product.product.tax / 100)) * item.quantity;
      }

      const itemTotal = itemSubtotal + itemTaxes;

      total += itemTotal;
      subtotal += itemSubtotal;
      taxes += itemTaxes;
    });

    this.billModel.total_amount = total;
    this.billModel.subtotal = subtotal;
    this.billModel.taxes = taxes;

  }

}