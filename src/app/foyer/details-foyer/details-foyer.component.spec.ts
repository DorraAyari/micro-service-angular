import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFoyerComponent } from './details-foyer.component';

describe('DetailsFoyerComponent', () => {
  let component: DetailsFoyerComponent;
  let fixture: ComponentFixture<DetailsFoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsFoyerComponent]
    });
    fixture = TestBed.createComponent(DetailsFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
