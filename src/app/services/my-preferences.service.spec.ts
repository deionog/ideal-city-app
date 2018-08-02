import { TestBed, inject } from '@angular/core/testing';

import { MyPreferencesService } from './my-preferences.service';

describe('MyPreferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyPreferencesService]
    });
  });

  it('should be created', inject([MyPreferencesService], (service: MyPreferencesService) => {
    expect(service).toBeTruthy();
  }));
});
