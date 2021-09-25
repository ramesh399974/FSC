import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFscProducttypeL2Component } from './list-fsc-producttype-l2.component';

describe('ListFscProducttypeL2Component', () => {
  let component: ListFscProducttypeL2Component;
  let fixture: ComponentFixture<ListFscProducttypeL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFscProducttypeL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFscProducttypeL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
