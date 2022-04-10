import { Movie } from './../../models/Movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { TvService } from 'src/app/services/tv.service';
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
    moviesFour:any[]=[]
    trending:any[]=[]
    tvPopular:any[]=[]
    tvOne:any[]=[]




  constructor(private _movieService:MovieService,private _tvService:TvService) { }

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
           else{
             this.moviesFour.push(this.movies[i]);
           }
         }
      //    console.log(this.moviesOne);
      //    console.log(this.moviesTwo);
      //    console.log(this.moviesThree);

      //  console.log(this.moviesFour);
      });

     this._movieService.getTrending().subscribe(
       (res: any) => {
         this.trending.push(res.results);
          console.log(this.trending)
      }); 
      this._tvService.get().subscribe(
       (res: any) => {
           this.tvPopular=res.results;
             for(let i=0;i<this.tvPopular.length;i++){
              if(i<8){
            this.tvOne.push(this.tvPopular[i]);
           }

         }
        console.log(this.tvOne)


      });  
    
  }
  
  

}
