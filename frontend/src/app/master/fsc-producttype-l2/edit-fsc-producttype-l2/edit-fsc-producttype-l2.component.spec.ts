import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFscProducttypeL2Component } from './edit-fsc-producttype-l2.component';

describe('EditFscProducttypeL2Component', () => {
  let component: EditFscProducttypeL2Component;
  let fixture: ComponentFixture<EditFscProducttypeL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFscProducttypeL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFscProducttypeL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
