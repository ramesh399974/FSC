import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFscProducttypeL2Component } from './add-fsc-producttype-l2.component';

describe('AddFscProducttypeL2Component', () => {
  let component: AddFscProducttypeL2Component;
  let fixture: ComponentFixture<AddFscProducttypeL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFscProducttypeL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFscProducttypeL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
