import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { CityData } from '../models/index';
import { ApiService } from './api.service';

@Injectable()
export class CitydataService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }

    post(cities): Observable<CityData[]> {
      return this.apiService
        .post('/comparecities', {"cities":cities})
        .map(data => {
          if (data.cityData) {
            // data.preferences.forEach(pref => {
            //   pref.selected = pref.isDefault;
            // });
          }
          return data.cityData;
        });
    }

}
