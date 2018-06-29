import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { UserPreferences } from '../models/index';
import { ApiService } from './api.service';

@Injectable()
export class UserPreferencesService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }

  get(): Observable<UserPreferences> {
    return this.apiService
      .get('/userPreferences')
      .map(data => {
        // Update the currentUser observable
        //this.currentUserSubject.next(data.user);
        if (data.preferences) {
          data.preferences.forEach(pref => {
            pref.selected = pref.isDefault;
          });
        }
        return data.preferences;
      });
  }

}
