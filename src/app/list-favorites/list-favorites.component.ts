import { Component, OnInit } from '@angular/core';
import { FavoritesService } from "../favorites.service";
@Component({
  selector: 'app-list-favorites',
  templateUrl: './list-favorites.component.html',
  styleUrls: ['./list-favorites.component.css']
})
export class ListFavoritesComponent {

  get favorites() : Set<String> {
    return this.favoritesService.favorites;
  }
  constructor(private favoritesService: FavoritesService) { }

  remove(name: String) {
    this.favoritesService.removeFavorite(name);
  }
}
