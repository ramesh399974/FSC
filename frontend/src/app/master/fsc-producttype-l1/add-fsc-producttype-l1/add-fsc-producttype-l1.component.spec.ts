import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFscProducttypeL1Component } from './add-fsc-producttype-l1.component';

describe('AddFscProducttypeL1Component', () => {
  let component: AddFscProducttypeL1Component;
  let fixture: ComponentFixture<AddFscProducttypeL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFscProducttypeL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFscProducttypeL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
