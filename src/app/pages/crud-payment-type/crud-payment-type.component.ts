import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentTypeService } from "../../services/payment-type.service"
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { PaymentTypeDialog } from "./dialogs/payment-type-dialog.component"

@Component({
  selector: 'app-crud-payment-type',
  templateUrl: './crud-payment-type.component.html',
  styleUrls: ['./crud-payment-type.component.scss']
})
export class CrudPaymentTypeComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id_payment_type', 'name', 'description', 'actions'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  constructor( private _paymentTypeService: PaymentTypeService, private _dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

  getAllList = () => {
    this._paymentTypeService.getAllList().subscribe({
      next: ( res: any ) => {
        this.dataSource.data = res.rows;
      },
      error: (err) => { console.log(err) }
    });
  }

  delete = ( id: number ) => {
    this._paymentTypeService.delete( id ).subscribe({
      next: () => {
        Swal.fire('Success', 'Payment type deleted', 'success');
        this.getAllList();
       },
      error: () => Swal.fire('Error', 'An error has ocurred', 'error')
    })
  }

  openCreateDialog = () => {
    const dialogRef = this._dialog.open( PaymentTypeDialog, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe( (res) => {
      if (res === 'reload') {
        this.getAllList();
      }
    });
  };

  openUpdateDialog = ( item: {} ) => {
    const dialogRef = this._dialog.open( PaymentTypeDialog, {
      width: '600px',
      data: {...item}
    });
    dialogRef.afterClosed().subscribe( (res) => {
      if (res === 'reload') {
        this.getAllList();
      }
    });
  };

}
