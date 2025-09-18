import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToPayPage } from './to-pay.page';

describe('ToPayPage', () => {
  let component: ToPayPage;
  let fixture: ComponentFixture<ToPayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
