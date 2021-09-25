import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFscProducttypeL3Component } from './list-fsc-producttype-l3.component';

describe('ListFscProducttypeL3Component', () => {
  let component: ListFscProducttypeL3Component;
  let fixture: ComponentFixture<ListFscProducttypeL3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFscProducttypeL3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFscProducttypeL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
