import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsFeaturesComponent } from './rx-js-features.component';

describe('RxJsFeaturesComponent', () => {
  let component: RxJsFeaturesComponent;
  let fixture: ComponentFixture<RxJsFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
