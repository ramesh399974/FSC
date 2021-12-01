import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFscSubStandardComponent } from './edit-fsc-sub-standard.component';

describe('EditFscSubStandardComponent', () => {
  let component: EditFscSubStandardComponent;
  let fixture: ComponentFixture<EditFscSubStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFscSubStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFscSubStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
