import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFscProductComponent } from './edit-fsc-product.component';

describe('EditFscProductComponent', () => {
  let component: EditFscProductComponent;
  let fixture: ComponentFixture<EditFscProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFscProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFscProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
