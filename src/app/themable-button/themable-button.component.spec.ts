import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemableButtonComponent } from './themable-button.component';

describe('ThemableButtonComponent', () => {
  let component: ThemableButtonComponent;
  let fixture: ComponentFixture<ThemableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemableButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
