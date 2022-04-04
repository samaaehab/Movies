import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _httpClient: HttpClient) { }
  private url='https://api.themoviedb.org/3/';
  private api_key='?api_key=df78b1ec3c75fc176ed082a69aaa382c';
  public get() { return this._httpClient.get(this.url + `movie/popular`+this.api_key); }

}
