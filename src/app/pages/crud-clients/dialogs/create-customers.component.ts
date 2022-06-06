import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientsService } from '../../../services/clients.service';



@Component({
  selector: 'create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['../crud-clients.component.scss'],
})
export class CreateCustomersComponent implements OnInit {
  id_card: String = '';
  name: String = '';
  actualID: String ='';
  actionButton= "Register";
  actionTitle="Add customer";
  isCreated = false;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _clientService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public editData: any
    ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.id_card="";
    this.name="";
    if(this.editData){
      this.id_card=this.editData.id_card;
      this.name=this.editData.name
      this.actionButton="Edit"
      this.actionTitle= "Edit customer"
      this.actualID = this.id_card;
      this.isCreated=true;
    }
  }
  postCustomer = () => {
    var cus = {
      name: this.name,
      id_card: this.id_card,
    };
    if(!this.editData){
    this._clientService.create(cus).subscribe({
      error: (err) => {
        if (err.status != 201) {
          alert("Something went wrong!")
          console.log('Error');
          console.log(err);
        }
        else{
          alert("Created successfully!")
          location.reload()
        }
      },
    });
  }else{
    this._clientService.update(this.actualID, cus).subscribe({
      next:(res)=>{
        alert("Customer edited")
        location.reload()
      },
      error: (err) => {
          alert("Something went wrong!")
          console.log('Error');
          console.log(err);
      },
    });
  }};
}
