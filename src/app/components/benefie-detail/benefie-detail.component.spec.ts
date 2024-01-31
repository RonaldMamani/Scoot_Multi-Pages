import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefieDetailComponent } from './benefie-detail.component';

describe('BenefieDetailComponent', () => {
  let component: BenefieDetailComponent;
  let fixture: ComponentFixture<BenefieDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefieDetailComponent]
    });
    fixture = TestBed.createComponent(BenefieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
