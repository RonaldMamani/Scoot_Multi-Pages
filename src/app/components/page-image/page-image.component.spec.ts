import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImageComponent } from './page-image.component';

describe('PageImageComponent', () => {
  let component: PageImageComponent;
  let fixture: ComponentFixture<PageImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageImageComponent]
    });
    fixture = TestBed.createComponent(PageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
