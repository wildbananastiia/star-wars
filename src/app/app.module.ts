import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header_and_footer/header/header.component';
import { FooterComponent } from './header_and_footer/footer/footer.component';
import { FilmsComponent } from './main/films/films.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FilmListComponent } from './main/films/film-list/film-list.component';
import { MatCardModule } from '@angular/material/card';
import { FilmCardComponent } from './helpers/film-card/film-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { SocialComponent } from './helpers/film-card/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmsComponent,
    FilmListComponent,
    FilmCardComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
