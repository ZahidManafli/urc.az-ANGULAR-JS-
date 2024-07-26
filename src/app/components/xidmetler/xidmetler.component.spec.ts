import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XidmetlerComponent } from './xidmetler.component';

describe('XidmetlerComponent', () => {
  let component: XidmetlerComponent;
  let fixture: ComponentFixture<XidmetlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XidmetlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XidmetlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
