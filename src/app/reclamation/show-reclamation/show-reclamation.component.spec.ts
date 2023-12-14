import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReclamationComponent } from './show-reclamation.component';

describe('ShowReclamationComponent', () => {
  let component: ShowReclamationComponent;
  let fixture: ComponentFixture<ShowReclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowReclamationComponent]
    });
    fixture = TestBed.createComponent(ShowReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
