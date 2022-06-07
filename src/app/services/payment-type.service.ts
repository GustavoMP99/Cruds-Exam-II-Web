import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  private baseUrl = 'https://web-examen2-backend.herokuapp.com';

  private endpoint = '/payment-type';

  constructor( private _http: HttpClient ) { }

  getAllList = () => this._http.get( this.baseUrl + this.endpoint );

  getById = ( id: number ) => this._http.get( this.baseUrl + this.endpoint + `/${ id }` );

  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );

  update = ( id: number, input: any ) => this._http.put( this.baseUrl + this.endpoint + `/${ id }`, input );

  delete = ( id: number ) => this._http.delete( this.baseUrl + this.endpoint + `/${ id }` );

}
