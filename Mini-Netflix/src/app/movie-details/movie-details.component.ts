import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyMovieDateService } from '../services/my-movie-date.service';
import { moviesModel } from '../model/IMovies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: moviesModel;
  constructor(private route: ActivatedRoute, private movieservice: MyMovieDateService) { }

  ngOnInit() {
    let id:number = parseInt(this.route.snapshot.params['id']);
    this.movieservice.getMovieByID(id).subscribe(result =>{
      this.selectedMovie = result;
      console.log(result);
      (err:any)=>console.log(err)
    })
  }

}
