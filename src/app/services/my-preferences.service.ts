import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

@Injectable()
export class MyPreferencesService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }

  get(): Observable<any> {
    return this.apiService
      .get('/mypreferences')
      .map(data => {
        if (data.myPreferences) {
          // data.preferences.forEach(pref => {
          //   pref.selected = pref.isDefault;
          // });
        }
        return data.myPreferences;
      });
  }

  post(pref): Observable<any> {
    return this.apiService
      .post('/myPreferences', { "myPreferences": pref })
      .map(data => {
        if (data.myPreferences) {
          // data.preferences.forEach(pref => {
          //   pref.selected = pref.isDefault;
          // });
        }
        return data.myPreferences;
      });
  }

  update(prefs): Observable<any> {
    return this.apiService.put('/myPreferences', { "myPreferences": prefs});
  }

}
