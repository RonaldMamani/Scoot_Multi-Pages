import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityPointedOutComponent } from './city-pointed-out.component';

describe('CityPointedOutComponent', () => {
  let component: CityPointedOutComponent;
  let fixture: ComponentFixture<CityPointedOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityPointedOutComponent]
    });
    fixture = TestBed.createComponent(CityPointedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
