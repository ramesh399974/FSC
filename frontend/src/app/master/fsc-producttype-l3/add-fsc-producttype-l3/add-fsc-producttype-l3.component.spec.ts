import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFscProducttypeL3Component } from './add-fsc-producttype-l3.component';

describe('AddFscProducttypeL3Component', () => {
  let component: AddFscProducttypeL3Component;
  let fixture: ComponentFixture<AddFscProducttypeL3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFscProducttypeL3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFscProducttypeL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
