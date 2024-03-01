import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefiesCareersComponent } from './benefies-careers.component';

describe('BenefiesCareersComponent', () => {
  let component: BenefiesCareersComponent;
  let fixture: ComponentFixture<BenefiesCareersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefiesCareersComponent]
    });
    fixture = TestBed.createComponent(BenefiesCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
