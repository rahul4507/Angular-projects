import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkComponent } from './pink.component';

describe('PinkComponent', () => {
  let component: PinkComponent;
  let fixture: ComponentFixture<PinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinkComponent]
    });
    fixture = TestBed.createComponent(PinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
