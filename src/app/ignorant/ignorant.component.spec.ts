import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnorantComponent } from './ignorant.component';

describe('IgnorantComponent', () => {
  let component: IgnorantComponent;
  let fixture: ComponentFixture<IgnorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgnorantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgnorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
