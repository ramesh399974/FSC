import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFscStandardComponent } from './list-fsc-standard.component';

describe('ListFscStandardComponent', () => {
  let component: ListFscStandardComponent;
  let fixture: ComponentFixture<ListFscStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFscStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFscStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
