import { Input, Component, OnInit } from '@angular/core';
import { FavoritesService } from "../favorites.service";
@Component({
  selector: 'gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent {

  constructor(private favorites: FavoritesService) {}

  get favorite() : boolean {
    return this.gem && this.favorites.isFavorite(this.gem.name);
  }

  @Input()
  gem: any;

  toggle() {
    if (!this.gem) { return; }
    this.favorites.toggle(this.gem.name);
  }

}
