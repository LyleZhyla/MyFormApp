import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToShipPage } from './to-ship.page';

describe('ToShipPage', () => {
  let component: ToShipPage;
  let fixture: ComponentFixture<ToShipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToShipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
