import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFscProducttypeL1Component } from './view-fsc-producttype-l1.component';

describe('ViewFscProducttypeL1Component', () => {
  let component: ViewFscProducttypeL1Component;
  let fixture: ComponentFixture<ViewFscProducttypeL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFscProducttypeL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFscProducttypeL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
