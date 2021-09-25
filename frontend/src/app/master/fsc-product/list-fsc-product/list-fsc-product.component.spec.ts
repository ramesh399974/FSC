import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFscProductComponent } from './list-fsc-product.component';

describe('ListFscProductComponent', () => {
  let component: ListFscProductComponent;
  let fixture: ComponentFixture<ListFscProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFscProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFscProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
