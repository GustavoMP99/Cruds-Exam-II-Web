import { Component, Inject, OnInit } from "@angular/core"
import { InventoryService } from "../../../services/inventory.service"
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'create-inventory',
  templateUrl: './create-inventory.component.html'
})
export class CreateInventoryComponent implements OnInit {

  products: any[] = [];

  inventoryModel: any = {}

  isCreate: boolean = true;

  constructor( private _inventoryService: InventoryService, 
    private dialogRef: MatDialogRef<CreateInventoryComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any ) {}

  ngOnInit(): void {
    if (this.data !== null) {
      this.isCreate = false;
      this.data['id_product'] = this.data.product.id_product;
      delete this.data.product;
      this.inventoryModel = this.data;
    }
    this.getAllProducts();
  }

  getAllProducts = () => {
    this._inventoryService.getProducts().subscribe({
      next: ( res: any ) => {
        this.products = res.rows;
      },
      error: ( err: any ) => { console.log(err) }
    });
  }

  addProductToInventory = () => {
    this._inventoryService.create( this.inventoryModel ).subscribe({
      next: ( res: any ) => {},
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Success', 'Product successfully added to inventory', 'success');
          this.dialogRef.close('reload');
        } else {
          if (err.error.message === 'Validation error') {
            Swal.fire('Error', 'The product is already in the inventory', 'error');
          } else {
            Swal.fire('Error', 'An error has ocurred', 'error');
          }
        }
      }
    });
  }

  update = () => {
    this._inventoryService.update( this.inventoryModel.id_inventory, this.inventoryModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Success', 'Record updated', 'success')
        this.dialogRef.close('reload');
      },
      error: ( err: any ) => Swal.fire('Error', 'An error has ocurred', 'error')
    });
  }

}