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
    moviesOne:any[]=[]
    moviesTwo:any[]=[]
    moviesThree:any[]=[]
    trending:any[]=[]



  constructor(private _movieService:MovieService) { }

  ngOnInit(): void {
    this._movieService.get().subscribe(
       (res: any) => {
          this.movies=res.results;
         for(let i=0;i<this.movies.length;i++){
           if(i<4){
            this.moviesOne.push(this.movies[i]);
           }
           else if(i<8){
             this.moviesTwo.push(this.movies[i]);

           }
           else if(i<12){
              this.moviesThree.push(this.movies[i]);
           }
         }
         console.log(this.moviesOne);
         console.log(this.moviesTwo);
         console.log(this.moviesThree);

       console.log(this.movies);
      });

     this._movieService.getTrending().subscribe(
       (res: any) => {
         this.trending.push(res.results);
          console.log(this.trending)
      });  
    
  }
  
  

}
