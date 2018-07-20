import { TestBed, inject } from '@angular/core/testing';

import { CitydataService } from './citydata.service';

describe('CitydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitydataService]
    });
  });

  it('should be created', inject([CitydataService], (service: CitydataService) => {
    expect(service).toBeTruthy();
  }));
});
