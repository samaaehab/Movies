import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  prodid:any;
  movieDetail:any
  movieVedio:any
  videoPath="https://www.youtube.com/embed/"
  constructor(private _activatedRoute:ActivatedRoute,private _movieDetails:MovieService) { }

  ngOnInit(): void {
    
    this._activatedRoute.paramMap.subscribe(params => {
      this.prodid = params.get('pId');
    });
    this._movieDetails.getDetails(this.prodid).subscribe(
      (res:any)=>{
        this.movieDetail=res;
        console.log(this.movieDetail)
      });
    // console.log(this.prodid)
    this._movieDetails.getMovieVedio(this.prodid).subscribe(
      (res:any)=>{
        this.movieVedio=res.results[0].key;
        // console.log(this.movieVedio.key)
        // $('#myframe').attr("src",this.videoPath+this.movieVedio)
      });

  }

}
