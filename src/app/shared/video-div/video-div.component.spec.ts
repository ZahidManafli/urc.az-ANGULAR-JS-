import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDivComponent } from './video-div.component';

describe('VideoDivComponent', () => {
  let component: VideoDivComponent;
  let fixture: ComponentFixture<VideoDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
