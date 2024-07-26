import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URCComponent } from './urc.component';

describe('URCComponent', () => {
  let component: URCComponent;
  let fixture: ComponentFixture<URCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [URCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(URCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
