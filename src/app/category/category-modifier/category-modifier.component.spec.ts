import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModifierComponent } from './category-modifier.component';

describe('CategoryModifierComponent', () => {
  let component: CategoryModifierComponent;
  let fixture: ComponentFixture<CategoryModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryModifierComponent]
    });
    fixture = TestBed.createComponent(CategoryModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
