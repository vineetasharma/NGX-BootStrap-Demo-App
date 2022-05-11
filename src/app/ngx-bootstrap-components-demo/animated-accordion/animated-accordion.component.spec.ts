import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedAccordionComponent } from './animated-accordion.component';

describe('AnimatedAccordionComponent', () => {
  let component: AnimatedAccordionComponent;
  let fixture: ComponentFixture<AnimatedAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
