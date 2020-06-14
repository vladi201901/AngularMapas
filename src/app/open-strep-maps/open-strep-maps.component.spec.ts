import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStrepMapsComponent } from './open-strep-maps.component';

describe('OpenStrepMapsComponent', () => {
  let component: OpenStrepMapsComponent;
  let fixture: ComponentFixture<OpenStrepMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenStrepMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStrepMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
