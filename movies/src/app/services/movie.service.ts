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
  public getTrending() { return this._httpClient.get(this.url + `trending/all/day`+this.api_key); }
  public getDetails(id:number) { return this._httpClient.get(this.url + `movie/${id}`+this.api_key); }
  public getMovieVedio(id:number) { return this._httpClient.get(this.url + `movie/${id}/videos`+this.api_key); }


}
