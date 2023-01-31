import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerPopupComponent } from './hamburger-popup.component';

describe('HamburgerPopupComponent', () => {
  let component: HamburgerPopupComponent;
  let fixture: ComponentFixture<HamburgerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburgerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
