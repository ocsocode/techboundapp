import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceComponent } from './rice.component';

describe('RiceComponent', () => {
  let component: RiceComponent;
  let fixture: ComponentFixture<RiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
