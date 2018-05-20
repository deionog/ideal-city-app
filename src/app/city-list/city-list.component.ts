import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  title = "Cities";
  @Input() selectedCities: Array<string>;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.selectedCities = ["City 1", "City 3", "City 5"]
   }

  ngOnInit() {
  }

  removeAll() {
    this.selectedCities = [];
    this.notify.emit(-1);
  }

  removeCity(index){
    //this.selectedCities.splice(index, 1);
    this.notify.emit(index);
  }

}
