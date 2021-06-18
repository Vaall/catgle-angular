import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kitty-card',
  templateUrl: './kitty-card.component.html',
  styleUrls: ['./kitty-card.component.scss']
})
export class KittyCardComponent implements OnInit {
  @Input() kitty: any;

  constructor() { }

  ngOnInit() {
  }

}
