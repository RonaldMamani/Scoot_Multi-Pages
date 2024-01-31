import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefieTopicComponent } from './benefie-topic.component';

describe('BenefieTopicComponent', () => {
  let component: BenefieTopicComponent;
  let fixture: ComponentFixture<BenefieTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefieTopicComponent]
    });
    fixture = TestBed.createComponent(BenefieTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
