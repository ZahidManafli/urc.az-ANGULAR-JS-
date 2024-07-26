import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GostericilerComponent } from './gostericiler.component';

describe('GostericilerComponent', () => {
  let component: GostericilerComponent;
  let fixture: ComponentFixture<GostericilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GostericilerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GostericilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
