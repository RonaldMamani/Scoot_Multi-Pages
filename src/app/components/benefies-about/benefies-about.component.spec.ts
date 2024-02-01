import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefiesAboutComponent } from './benefies-about.component';

describe('BenefiesAboutComponent', () => {
  let component: BenefiesAboutComponent;
  let fixture: ComponentFixture<BenefiesAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefiesAboutComponent]
    });
    fixture = TestBed.createComponent(BenefiesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
