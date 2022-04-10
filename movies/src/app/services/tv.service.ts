import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvService {
 constructor(private _httpClient: HttpClient) { }
  private url='https://api.themoviedb.org/3/';
  private api_key='?api_key=df78b1ec3c75fc176ed082a69aaa382c';
  public get() { return this._httpClient.get(this.url + `tv/popular`+this.api_key); }

}
