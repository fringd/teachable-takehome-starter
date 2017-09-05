import { Injectable } from '@angular/core';

const favKey = 'favorites';
@Injectable()
export class FavoritesService {


  favorites : Set<String>;
  constructor() {
    let json = localStorage.getItem(favKey);
    this.favorites = new Set();
    if (json !== null) {
      console.log(json);
      console.log(!!json);
      for (let favorite of JSON.parse(json)) {
        this.favorites.add(favorite);
      }
    }
  }

  addFavorite(name: String) {
    this.favorites.add(name);
    this.save();
  }

  removeFavorite(name: String) {
    this.favorites.delete(name);
    this.save();
  }

  toggle(name: String) {
    if (this.isFavorite(name)) {
      this.removeFavorite(name);
    } else {
      this.addFavorite(name);
    }
  }

  save() {
    localStorage.setItem(favKey, JSON.stringify(Array.from(this.favorites)));
  }

  isFavorite(name: String) : boolean {
    return this.favorites.has(name);
  }

}
