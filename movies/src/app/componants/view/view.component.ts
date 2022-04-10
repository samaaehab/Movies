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
  constructor(private _activatedRoute:ActivatedRoute,private _movieDetails:MovieService) { }

  ngOnInit(): void {
    
    this._activatedRoute.paramMap.subscribe(params => {
      this.prodid = params.get('pId');
    });
    this._movieDetails.getDetails(this.prodid).subscribe(
      (res:any)=>{
        console.log(res)
      });
    console.log(this.prodid)

  }

}
