import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatCurrencyComponent } from './updat-currency.component';

describe('UpdatCurrencyComponent', () => {
  let component: UpdatCurrencyComponent;
  let fixture: ComponentFixture<UpdatCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatCurrencyComponent]
    });
    fixture = TestBed.createComponent(UpdatCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
