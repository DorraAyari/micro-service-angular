import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogModificationComponent } from './blog-modification.component';

describe('BlogModificationComponent', () => {
  let component: BlogModificationComponent;
  let fixture: ComponentFixture<BlogModificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogModificationComponent]
    });
    fixture = TestBed.createComponent(BlogModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
