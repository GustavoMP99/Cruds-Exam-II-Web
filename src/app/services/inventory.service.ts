import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl = 'https://web-examen2-backend.herokuapp.com';

  private endpoint = '/inventory';

  constructor( private _http: HttpClient ) { }

  getAllList = () => this._http.get( this.baseUrl + this.endpoint );

  getById = ( id: number ) => this._http.get( this.baseUrl + this.endpoint + `/${ id }` );

  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );

  update = (  ) => {};

  getProducts = () => this._http.get( this.baseUrl + '/products' );

}
