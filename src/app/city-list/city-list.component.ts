import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  title = "Cities";
  selectedCities: Array<string>;

  constructor() {
    this.selectedCities = ["City 1", "City 3", "City 5"]
   }

  ngOnInit() {
  }

  removeAll() {
    this.selectedCities = []
  }

}
