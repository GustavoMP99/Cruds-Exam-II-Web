import { Component, OnInit } from "@angular/core"
import { InventoryService } from "../../../services/inventory.service"

@Component({
  selector: 'create-inventory',
  templateUrl: './create-inventory.component.html'
})
export class CreateInventoryComponent implements OnInit {

  products: any[] = [];

  constructor( private _inventoryService: InventoryService ) {}

  ngOnInit(): void {
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

}