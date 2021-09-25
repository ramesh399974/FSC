import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFscProductComponent } from './view-fsc-product.component';

describe('ViewFscProductComponent', () => {
  let component: ViewFscProductComponent;
  let fixture: ComponentFixture<ViewFscProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFscProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFscProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
