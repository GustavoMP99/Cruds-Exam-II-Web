import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseUrl = 'https://web-examen2-backend.herokuapp.com';

  private endpoint = '/customers';

  constructor( private _http: HttpClient ) { }

  getAllList = () => this._http.get( this.baseUrl + this.endpoint );

  getById = ( id: number ) => this._http.get( this.baseUrl + this.endpoint + `/${ id }` );

  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );

  delete = ( id: String ) => this._http.delete( this.baseUrl + this.endpoint+ `/${ id }` );

  update = ( id: String, input:any ) => this._http.put( this.baseUrl + this.endpoint+ `/${ id }`, input );


}
