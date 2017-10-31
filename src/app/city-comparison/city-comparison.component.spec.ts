import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityComparisonComponent } from './city-comparison.component';

describe('CityComparisonComponent', () => {
  let component: CityComparisonComponent;
  let fixture: ComponentFixture<CityComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
