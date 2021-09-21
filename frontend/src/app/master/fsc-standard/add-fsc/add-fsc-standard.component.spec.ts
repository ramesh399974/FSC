import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFscStandardComponent } from './add-fsc-standard.component';

describe('AddFscStandardComponent', () => {
  let component: AddFscStandardComponent;
  let fixture: ComponentFixture<AddFscStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFscStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFscStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
