import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFscSubStandardComponent } from './add-fsc-sub-standard.component';

describe('AddFscSubStandardComponent', () => {
  let component: AddFscSubStandardComponent;
  let fixture: ComponentFixture<AddFscSubStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFscSubStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFscSubStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
