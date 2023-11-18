import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  moviesList: any;
  selectedMovieId: any;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    if (!this.authservice.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }

    this.moviesService.movies().subscribe((data) => {
      console.log(data);
      this.moviesList = data;
      for (let movie of this.moviesList.results) {
        movie.poster_path = `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`;
        console.log(movie.poster_path);
      }
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  selectMovie(id: number) {
    this.selectedMovieId = id;
    this.router.navigateByUrl(`dashboard/movies/details/${id}`);
  }
}
