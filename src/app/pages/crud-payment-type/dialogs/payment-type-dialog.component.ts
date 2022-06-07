import { Component, Inject, OnInit } from "@angular/core"
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentTypeService } from "../../../services/payment-type.service"


@Component({
  selector: 'create-inventory',
  templateUrl: './payment-type-dialog.component.html'
})
export class PaymentTypeDialog implements OnInit {

  paymentTypeModel: any = {}

  isCreate: boolean = true;

  constructor( private _paymentTypeService: PaymentTypeService, 
    private dialogRef: MatDialogRef<PaymentTypeDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any ) {}

  ngOnInit(): void {
    if (this.data !== null) {
      this.isCreate = false;
      this.paymentTypeModel = this.data;
    }
  }

  create = () => {
    this._paymentTypeService.create( this.paymentTypeModel ).subscribe({
      next: ( res: any ) => {},
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Success', 'Payment type created', 'success');
          this.dialogRef.close('reload');
        } else {
          Swal.fire('Error', 'An error has ocurred', 'error');
        }
      }
    });
  }

  update = () => {
    this._paymentTypeService.update( this.paymentTypeModel.id_payment_type, this.paymentTypeModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Success', 'Record updated', 'success');
        this.dialogRef.close('reload');
      },
      error: ( err: any ) => Swal.fire('Error', 'An error has ocurred', 'error')
    });
  }

}