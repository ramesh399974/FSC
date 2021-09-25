import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFscProducttypeL1Component } from './list-fsc-producttype-l1.component';

describe('ListFscProducttypeL1Component', () => {
  let component: ListFscProducttypeL1Component;
  let fixture: ComponentFixture<ListFscProducttypeL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFscProducttypeL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFscProducttypeL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
