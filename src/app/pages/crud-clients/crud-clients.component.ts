import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientsService } from '../../services/clients.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CreateCustomersComponent } from "./dialogs/create-customers.component"


@Component({
  selector: 'app-crud-clients',
  templateUrl: './crud-clients.component.html',
  styleUrls: ['./crud-clients.component.scss'],
})
export class CrudClientsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id_card', 'name', 'actions'];
  
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _clientsService: ClientsService,
    private _dialog: MatDialog,
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnInit(): void {
    this.getAllList();
  }

  // ----------------------------------------------------------------------------------------------

  getAllList = () => {
    this._clientsService.getAllList().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.rows;
      },
      error: (err) => {
        console.log(err);
      },
    });
  };

  // ----------------------------------------------------------------------------------------------

  openCreateDialog = () => {
    const dialogRef = this._dialog.open(CreateCustomersComponent, {
      width: '600px',
    });
  };

    // ----------------------------------------------------------------------------------------------

    openEditDialog = (row: any) => {
      const dialogRef = this._dialog.open(CreateCustomersComponent, {
        width: '600px',
        data: row
      });
    };

  // ----------------------------------------------------------------------------------------------

  deleteCustomer = (id:String) => {
    this._clientsService.delete(id).subscribe({
      next:(res)=>{
        Swal.fire("Done", "Customer deleted!", "success").then(() => {
          location.reload()
        });
      },
      error: (err) => {
        console.log(id)
        console.log(err)
        Swal.fire("Error!", "Customer not deleted!", "error");
      },
    });
  };
}
