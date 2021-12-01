import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFscSubStandardComponent } from './view-fsc-sub-standard.component';

describe('ViewFscSubStandardComponent', () => {
  let component: ViewFscSubStandardComponent;
  let fixture: ComponentFixture<ViewFscSubStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFscSubStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFscSubStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
