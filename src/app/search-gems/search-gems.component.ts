import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-search-gems',
  templateUrl: './search-gems.component.html',
  styleUrls: ['./search-gems.component.css']
})
export class SearchGemsComponent {
  query = '';

  searching = false;

  gems = [];

  constructor(private http: Http) {
  }

  search() {
    if (this.searching == true) {
      return;
    }
    this.searching = true;
    this.http.get("http://localhost:3000/api/v1/search.json", {params: {query: this.query}})
        .toPromise().then((resp) => {
          this.gems = resp.json();
          console.log(this.gems);
          this.searching = false;
        });
  };
}
