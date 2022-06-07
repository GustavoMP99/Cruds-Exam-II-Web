import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core"
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BillingService } from "../../services/billing.service"
import { MatDialog } from "@angular/material/dialog"
import { CreateBillDialog } from "./dialogs/create-bill-dialog.component"

@Component({
  selector: 'app-crud-billing',
  templateUrl: './crud-billing.component.html',
  styleUrls: ['./crud-billing.component.scss']
})
export class CrudBillingComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id_billing', 'date', 'subtotal', 'taxes','total_amount', 'customer',
    'payment_type', 'state', 'actions'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  constructor( private _billingService: BillingService, private _dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

  getAllList = () => {
    this._billingService.getAllList().subscribe({
      next: ( res: any ) => { 
        this.dataSource.data = res.rows;
       },
      error: ( err: any ) => { console.log(err) }
    });
  }

  changeState = ( id: number ) => {
    this._billingService.changeState( id ).subscribe({
      next: ( res: any ) => {
        this.getAllList();
      },
      error: ( err: any ) => { console.log(err) }
    });
  }

  openCreateDialog = () => {
    const dialogRef = this._dialog.open( CreateBillDialog, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe( (res) => {
      if (res === 'reload') {
        this.getAllList();
      }
    });
  }

  openBillDialog = ( id:number ) => {
    const dialogRef = this._dialog.open( CreateBillDialog, {
      width: '600px',
      data: id
    });
    dialogRef.afterClosed().subscribe( (res) => {
      if (res === 'reload') {
        this.getAllList();
      }
    });
  }

}
