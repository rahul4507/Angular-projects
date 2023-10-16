import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowComponent } from './yellow.component';

describe('YellowComponent', () => {
  let component: YellowComponent;
  let fixture: ComponentFixture<YellowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YellowComponent]
    });
    fixture = TestBed.createComponent(YellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
