import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceSelComponent } from './preference-sel.component';

describe('PreferenceSelComponent', () => {
  let component: PreferenceSelComponent;
  let fixture: ComponentFixture<PreferenceSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
