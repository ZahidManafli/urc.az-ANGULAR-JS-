import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerefdaslarComponent } from './terefdaslar.component';

describe('TerefdaslarComponent', () => {
  let component: TerefdaslarComponent;
  let fixture: ComponentFixture<TerefdaslarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerefdaslarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerefdaslarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
