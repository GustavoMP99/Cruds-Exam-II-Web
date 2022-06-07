import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['../crud-products.component.scss'],
})
export class CreateProductsComponent implements OnInit {
  id_product: number = 0;
  name: String = '';
  actualID: number = 0;
  price: number = 0;
  tax: number = 0;
  actionButton = 'Register';
  actionTitle = 'Add products';
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _productService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.name = '';
    if (this.editData) {
      this.name = this.editData.name;
      this.price = this.editData.price;
      this.tax = this.editData.tax;
      this.actionButton = 'Edit';
      this.actionTitle = 'Edit product';

      this.actualID = this.editData.id_product;
      console.log(this.actualID);
    }
  }
  postCustomer = () => {
    var cus = {
      name: this.name,
      price: this.price,
      tax: this.tax,
    };
    if (!this.editData) {
      if (this.name == '') {
        Swal.fire('Error!', "Name can't be empty!", 'error');
      } else {
        this._productService.create(cus).subscribe({
          error: (err) => {
            if (err.status != 201) {
              Swal.fire('Error!', 'Product not created!', 'error');
              console.log('Error');
              console.log(err);
            } else {
              Swal.fire('Done', 'Product added!', 'success').then(() => {
                location.reload()
              });
            }
          },
        });
      }
    } else {
      console.log(this.actualID);
      this._productService.update(this.actualID, cus).subscribe({
        next: (res) => {
          Swal.fire('Done', 'Product edited!', 'success').then(() => {
            location.reload()
          });
        },
        error: (err) => {
          Swal.fire('Error!', 'Product not edited!', 'error');
          console.log(err);
        },
      });
    }
  };
}
