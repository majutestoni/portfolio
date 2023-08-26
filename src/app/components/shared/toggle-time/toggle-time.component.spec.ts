import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleTimeComponent } from './toggle-time.component';

describe('ToggleTimeComponent', () => {
  let component: ToggleTimeComponent;
  let fixture: ComponentFixture<ToggleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
