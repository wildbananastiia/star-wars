import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../../services/films.service'
import { Film } from '../../../interfaces/film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[];

  constructor(private readonly filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getFilms()
      .subscribe((films: Film[]) => this.films = films);
  }
}
