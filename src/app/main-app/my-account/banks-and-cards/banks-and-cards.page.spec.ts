import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BanksAndCardsPage } from './banks-and-cards.page';

describe('BanksAndCardsPage', () => {
  let component: BanksAndCardsPage;
  let fixture: ComponentFixture<BanksAndCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksAndCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
