import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl = 'https://web-examen2-backend.herokuapp.com';

  private endpoint = '/billing';

  constructor( private _http: HttpClient ) { }

  getAllList = () => this._http.get( this.baseUrl + this.endpoint );

  getById = ( id:number ) => this._http.get( this.baseUrl + this.endpoint + `/${ id }` );

  changeState = ( id: number ) => this._http.put( this.baseUrl + this.endpoint + `/state/${ id }`, {} );

  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );

  delete = ( id: number ) => this._http.delete( this.baseUrl + this.endpoint + `/${ id }` );

  getCustomers = () => this._http.get( this.baseUrl + '/customers' );

  getPaymentTypes = () => this._http.get( this.baseUrl + '/payment-type' );

  getProducts = () => this._http.get( this.baseUrl + '/products' );

  getProductsInStock = () => this._http.get( this.baseUrl + '/inventory' );


}
