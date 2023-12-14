import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAjouterComponent } from './category-ajouter.component';

describe('CategoryAjouterComponent', () => {
  let component: CategoryAjouterComponent;
  let fixture: ComponentFixture<CategoryAjouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAjouterComponent]
    });
    fixture = TestBed.createComponent(CategoryAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
