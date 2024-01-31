import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefiesAppComponent } from './benefies-app.component';

describe('BenefiesAppComponent', () => {
  let component: BenefiesAppComponent;
  let fixture: ComponentFixture<BenefiesAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefiesAppComponent]
    });
    fixture = TestBed.createComponent(BenefiesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
