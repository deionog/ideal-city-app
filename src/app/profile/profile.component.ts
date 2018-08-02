import { Component, OnInit } from '@angular/core';
import { UserService, CityFavoritesService, MyPreferencesService } from '../services';
import { User, UserPreferences } from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  details: User;
  myCities: Array<any> = [];
  myPreferences: UserPreferences[] = [];
  numOfCities: number = 0;
  firstName: string = "Dummy";

  constructor(private userService: UserService,
    private cityFavService: CityFavoritesService,
    private myPrefService: MyPreferencesService) {
      this.details = this.userService.getCurrentUser();
    }

  ngOnInit() {
    this.cityFavService.get().subscribe(data => {
      this.myCities = data;
      this.numOfCities = data.length;
    });
    this.myPrefService.get().subscribe(data => this.myPreferences = data);
    this.setupTabs();
  }

  setupTabs() {
    const tabLinks = Array.from(document.querySelectorAll(".tabs a"));
    const tabPanels = Array.from(document.querySelectorAll(".tab-pane"));
    tabLinks.forEach(el => {
      el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector('.tabs li.active').classList.remove("active");
        document.querySelector('.tab-pane.active').classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = Array.from(parentListItem.parentElement.children).indexOf(parentListItem);
        const panel = tabPanels.filter(el => parseInt(el.getAttribute("data-index"),10) == index);
        panel[0].classList.add("active");
      });
    });
  }

  removeCity(city, index){
    this.cityFavService.remove(city).subscribe(data=>this.myCities.splice(index, 1));
  }

  updatePreferences(){
    this.myPrefService.update(this.myPreferences);
  }

}
