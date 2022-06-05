import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { InventoryService } from '../../services/inventory.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CreateInventoryComponent } from "./dialogs/create-inventory.component"


@Component({
  selector: 'app-crud-inventary',
  templateUrl: './crud-inventary.component.html',
  styleUrls: ['./crud-inventary.component.scss']
})
export class CrudInventaryComponent implements OnInit, AfterViewInit {

  data = '';

  displayedColumns = ['id_inventory', 'product', 'quantity', 'min_quantity', 'max_quantity',
    'taxed', 'actions'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  constructor( private _inventoryService: InventoryService, private _dialog: MatDialog ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

  ngOnInit(): void {
    this.getAllList();
  }

  // ----------------------------------------------------------------------------------------------

  getAllList = () => {
    this._inventoryService.getAllList().subscribe({
      next: ( res: any ) => {
        this.dataSource.data = res.rows;
      },
      error: (err) => { console.log(err) }
    });
  }

  // ----------------------------------------------------------------------------------------------

  openCreateDialog = () => {
    const dialogRef = this._dialog.open( CreateInventoryComponent, {
      width: '600px'
    });
  }

}
