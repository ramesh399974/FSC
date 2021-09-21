import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFscStandardComponent } from './edit-fsc-standard.component';

describe('EditFscStandardComponent', () => {
  let component: EditFscStandardComponent;
  let fixture: ComponentFixture<EditFscStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFscStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFscStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
