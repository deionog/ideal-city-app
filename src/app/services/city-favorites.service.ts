import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { ApiService } from './api.service';

@Injectable()
export class CityFavoritesService {

  constructor(private apiService: ApiService,
    private http: HttpClient) { }

  get(): Observable<any> {
    return this.apiService
      .get('/myCities')
      .map(data => {
        if (data.myCities) {
          // data.preferences.forEach(pref => {
          //   pref.selected = pref.isDefault;
          // });
        }
        return data.myCities;
      });
  }

  post(city): Observable<any> {
    return this.apiService
      .post('/myCities', { "myCities": city })
      .map(data => {
        if (data.myCities) {
          // data.preferences.forEach(pref => {
          //   pref.selected = pref.isDefault;
          // });
        }
        return data.myCities;
      });
  }

  remove(city): Observable<any> {
    return this.apiService.delete('/myPreferences/'+ city.id);
  }

}
