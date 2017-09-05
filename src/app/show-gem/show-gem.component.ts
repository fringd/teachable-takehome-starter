import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-show-gem',
  templateUrl: './show-gem.component.html',
  styleUrls: ['./show-gem.component.css']
})
export class ShowGemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: Http) {
  }

  gem : any;


  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        let gemName = params.get('id');
        return this.http.get('http://localhost:3000/api/v1/gems/' + gemName + '.json'); })
      .subscribe((response) => this.gem = response.json());
  }

}
