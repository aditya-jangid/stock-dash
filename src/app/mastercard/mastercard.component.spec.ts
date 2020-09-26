import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mastercardComponent } from './mastercard.component';

describe('mastercardComponent', () => {
  let component: mastercardComponent;
  let fixture: ComponentFixture<mastercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mastercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mastercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
