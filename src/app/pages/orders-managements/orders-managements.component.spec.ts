import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersManagementsComponent } from './orders-managements.component';

describe('OrdersManagementsComponent', () => {
  let component: OrdersManagementsComponent;
  let fixture: ComponentFixture<OrdersManagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersManagementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
