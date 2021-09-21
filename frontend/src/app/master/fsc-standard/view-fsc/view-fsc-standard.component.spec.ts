import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFscStandardComponent } from './view-fsc-standard.component';

describe('ViewFscStandardComponent', () => {
  let component: ViewFscStandardComponent;
  let fixture: ComponentFixture<ViewFscStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFscStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFscStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
