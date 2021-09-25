import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFscProducttypeL3Component } from './view-fsc-producttype-l3.component';

describe('ViewFscProducttypeL3Component', () => {
  let component: ViewFscProducttypeL3Component;
  let fixture: ComponentFixture<ViewFscProducttypeL3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFscProducttypeL3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFscProducttypeL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
