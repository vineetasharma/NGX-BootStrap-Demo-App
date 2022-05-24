import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormlyDemoComponent } from './ng-formly-demo.component';

describe('NgFormlyDemoComponent', () => {
  let component: NgFormlyDemoComponent;
  let fixture: ComponentFixture<NgFormlyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormlyDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormlyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
