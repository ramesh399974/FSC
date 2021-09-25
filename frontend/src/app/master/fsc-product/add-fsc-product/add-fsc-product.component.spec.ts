import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFscProductComponent } from './add-fsc-product.component';

describe('AddFscProductComponent', () => {
  let component: AddFscProductComponent;
  let fixture: ComponentFixture<AddFscProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFscProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFscProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
