import { Movie } from './../../models/Movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    Movies:Movie[]=[];
    movies:any[]=[];

  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {
    this._movieService.get().subscribe(
       (res: any) => {
       this.movies=res.results;
       console.log(this.movies)
      });
    
  }
  
  

}
