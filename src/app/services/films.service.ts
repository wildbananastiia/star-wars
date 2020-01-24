import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../interfaces/api-response';
import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private readonly httpClient: HttpClient) { }

  getFilms() {
    return this.httpClient
      .get<ApiResponse<Film[]>>(`${environment.apiUrl}/films`)
      .pipe(
        map(res => res.results)
      )
  }
}
