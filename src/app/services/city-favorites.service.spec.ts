import { TestBed, inject } from '@angular/core/testing';

import { CityFavoritesService } from './city-favorites.service';

describe('CityFavoritesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityFavoritesService]
    });
  });

  it('should be created', inject([CityFavoritesService], (service: CityFavoritesService) => {
    expect(service).toBeTruthy();
  }));
});
