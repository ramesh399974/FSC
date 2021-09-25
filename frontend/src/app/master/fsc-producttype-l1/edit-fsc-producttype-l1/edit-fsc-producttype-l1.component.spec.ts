import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFscProducttypeL1Component } from './edit-fsc-producttype-l1.component';

describe('EditFscProducttypeL1Component', () => {
  let component: EditFscProducttypeL1Component;
  let fixture: ComponentFixture<EditFscProducttypeL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFscProducttypeL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFscProducttypeL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
