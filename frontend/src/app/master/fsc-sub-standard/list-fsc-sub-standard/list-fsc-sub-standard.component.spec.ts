import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFscSubStandardComponent } from './list-fsc-sub-standard.component';

describe('ListFscSubStandardComponent', () => {
  let component: ListFscSubStandardComponent;
  let fixture: ComponentFixture<ListFscSubStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFscSubStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFscSubStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
