import { Component, OnInit } from '@angular/core';
import { UserPreferences } from '../models';
import { UserPreferencesService } from '../services'

@Component({
  selector: 'app-preference-sel',
  templateUrl: './preference-sel.component.html',
  styleUrls: ['./preference-sel.component.scss']
})
export class PreferenceSelComponent implements OnInit {

  preferences: Array<UserPreferences>;
  constructor(private userPreferenceService: UserPreferencesService) {
    this.preferences = [];
  }

  ngOnInit() {
    this.userPreferenceService.get()
      .subscribe((data: any) => { this.preferences = data }, err => console.log(err));
  }

  toggleSelect(preference: UserPreferences) {
    preference.selected = !preference.selected;
  }

  selectAll() {
    this.preferences.forEach(function (preference) {
      preference.selected = true;
    })
  }

}
