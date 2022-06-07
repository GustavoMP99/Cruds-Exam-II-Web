import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductsComponent } from "./dialogs/create-products.component"
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.scss']
})
export class CrudProductsComponent implements OnInit {
  displayedColumns = ['id_product', 'name','price', 'tax',  'actions'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _productService: ProductsService,
    private _dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnInit(): void {
    this.getAllList();
  }

  // ----------------------------------------------------------------------------------------------

  getAllList = () => {
    this._productService.getAllList().subscribe({
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
    const dialogRef = this._dialog.open(CreateProductsComponent, {
      width: '600px',
    });
  };

    // ----------------------------------------------------------------------------------------------

    openEditDialog = (row: any) => {
      const dialogRef = this._dialog.open(CreateProductsComponent, {
        width: '600px',
        data: row
      });
    };

  // ----------------------------------------------------------------------------------------------

  deleteCustomer = (id:number) => {
    this._productService.delete(id).subscribe({
      next:(res)=>{
        Swal.fire("Done", "Customer deleted!", "success").then(() => {
          location.reload()
        });
      },
      error: (err) => {
        console.log(id)
        console.log(err)
        Swal.fire("Error", "Customer not deleted!", "error");
      },
    });
  };
}
