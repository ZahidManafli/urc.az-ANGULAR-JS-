import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicalTapsiriqlarComponent } from './unical-tapsiriqlar.component';

describe('UnicalTapsiriqlarComponent', () => {
  let component: UnicalTapsiriqlarComponent;
  let fixture: ComponentFixture<UnicalTapsiriqlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnicalTapsiriqlarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnicalTapsiriqlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
