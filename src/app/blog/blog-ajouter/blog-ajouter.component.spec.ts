import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAjouterComponent } from './blog-ajouter.component';

describe('BlogAjouterComponent', () => {
  let component: BlogAjouterComponent;
  let fixture: ComponentFixture<BlogAjouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAjouterComponent]
    });
    fixture = TestBed.createComponent(BlogAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
