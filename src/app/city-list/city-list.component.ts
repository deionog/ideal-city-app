import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  title = "Cities";
  private _selectedCities: Array<String>;
  //@Input() selectedCities: Array<string>;
  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this._selectedCities = [];
   }

  ngOnInit() {
  }

  @Input()
  set selectedCities(selectedCities: Array<String>){
    this._selectedCities = selectedCities;
    console.log(selectedCities);
    console.log(this._selectedCities);
    sessionStorage.setItem('cities', selectedCities.join('-vs-'));
  }

  get selectedCities(){
    return this._selectedCities;
  }

  removeAll() {
    this._selectedCities = [];
    this.notify.emit(-1);
  }

  removeCity(index){
    //this.selectedCities.splice(index, 1);
    this.notify.emit(index);
  }

}
