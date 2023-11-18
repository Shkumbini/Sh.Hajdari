import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: any;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.moviesService.movieDetails(data.id).subscribe((data) => {
        console.log(data);
        this.movieDetails = data;
        this.movieDetails.poster_path = `https://image.tmdb.org/t/p/w440_and_h660_face${this.movieDetails.poster_path}`;
        console.log(this.movieDetails.poster_path);
      });
    });
  }
}
