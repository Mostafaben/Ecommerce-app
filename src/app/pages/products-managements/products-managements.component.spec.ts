import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsManagementsComponent } from './products-managements.component';

describe('ProductsManagementsComponent', () => {
  let component: ProductsManagementsComponent;
  let fixture: ComponentFixture<ProductsManagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsManagementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
