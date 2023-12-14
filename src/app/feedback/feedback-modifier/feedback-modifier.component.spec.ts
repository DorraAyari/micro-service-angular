import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackModifierComponent } from './feedback-modifier.component';

describe('FeedbackModifierComponent', () => {
  let component: FeedbackModifierComponent;
  let fixture: ComponentFixture<FeedbackModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackModifierComponent]
    });
    fixture = TestBed.createComponent(FeedbackModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
