import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFscProducttypeL2Component } from './view-fsc-producttype-l2.component';

describe('ViewFscProducttypeL2Component', () => {
  let component: ViewFscProducttypeL2Component;
  let fixture: ComponentFixture<ViewFscProducttypeL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFscProducttypeL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFscProducttypeL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
