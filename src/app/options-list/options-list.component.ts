import { Component, OnInit } from '@angular/core';
import { Factor } from './factor';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent implements OnInit {

  title = "Comparison Factors";
  factors: Array<Factor>;

  constructor() {
    this.factors = [
      new Factor("Cost of Living", false),
      new Factor("Population", false),
      new Factor("Crime rates", false),
      new Factor("Employment Stats", false),
      new Factor("Tax rates", false),
      new Factor("Climate", false),
      new Factor("Real estate values", false)
    ];
  }

  ngOnInit() {
  }

  toggleSelect(factor:Factor){
    factor.selected = !factor.selected;
  }

  selectAll() {
    this.factors.forEach(function(factor){
      factor.selected = true;
    })
  }

}
