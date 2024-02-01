import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenenfieNumerationComponent } from './benenfie-numeration.component';

describe('BenenfieNumerationComponent', () => {
  let component: BenenfieNumerationComponent;
  let fixture: ComponentFixture<BenenfieNumerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenenfieNumerationComponent]
    });
    fixture = TestBed.createComponent(BenenfieNumerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
