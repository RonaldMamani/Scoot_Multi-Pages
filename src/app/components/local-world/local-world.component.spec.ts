import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWorldComponent } from './local-world.component';

describe('LocalWorldComponent', () => {
  let component: LocalWorldComponent;
  let fixture: ComponentFixture<LocalWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalWorldComponent]
    });
    fixture = TestBed.createComponent(LocalWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
