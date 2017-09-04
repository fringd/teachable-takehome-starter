import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
