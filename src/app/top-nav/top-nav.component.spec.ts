import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavComponent } from './top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavComponent ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default collapse to "closed"', () => {
    expect(component.collapse).toEqual("closed");
  });

  it('should set collapse to "open" when toggleCollapse is called with no params', () => {
    component.toggleCollapse();
    expect(component.collapse).toEqual("open");
  });

  it('should set collapse to "closed" when toggleCollapse is called and collapse is "open"', () => {
    component.collapse = "open";
    component.toggleCollapse();
    expect(component.collapse).toEqual("closed");
  });

  it('should set collapse to "closed" when toggleCollapse is called with false param', () => {
    component.toggleCollapse(false);
    expect(component.collapse).toEqual("closed");
  });
});
