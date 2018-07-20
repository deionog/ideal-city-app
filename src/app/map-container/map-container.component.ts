import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  lat: number = 36.778259;
  lng: number = -95.7129;
  zoom: number = 4;
  searchControl: FormControl;
  cityName: String = "";
  cities: Array<String> = new Array<String>();

  @ViewChild("search")
  searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    //this._setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["(cities)"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;

          this.cityName = place.address_components[0].short_name + ", " +
          place.address_components[2].short_name;
          console.log(this.lat);
          console.log(this.lng);
          console.log(this.zoom);
          console.log(place);
        });
      });
    });
  }

  addCity(city) {
    console.log(city);
    this.cities.push(city);
    sessionStorage.setItem('cities', this.cities.join('-vs-'));
  }

  onNotify(ind: number){
    console.log("Index to delete: " + ind);
    if(ind == -1){
      this.cities = [];
    } else{
    this.cities.splice(ind, 1);
    }
    sessionStorage.setItem('cities', this.cities.join('-vs-'));
  }

  /**
   * Set location to user's current location from browser
   */
   _setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
