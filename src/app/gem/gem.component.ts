import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent {

  @Input()
  gem: any;

}
