import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFscProducttypeL3Component } from './edit-fsc-producttype-l3.component';

describe('EditFscProducttypeL3Component', () => {
  let component: EditFscProducttypeL3Component;
  let fixture: ComponentFixture<EditFscProducttypeL3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFscProducttypeL3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFscProducttypeL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
