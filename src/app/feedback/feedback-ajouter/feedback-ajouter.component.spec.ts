import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAjouterComponent } from './feedback-ajouter.component';

describe('FeedbackAjouterComponent', () => {
  let component: FeedbackAjouterComponent;
  let fixture: ComponentFixture<FeedbackAjouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackAjouterComponent]
    });
    fixture = TestBed.createComponent(FeedbackAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
