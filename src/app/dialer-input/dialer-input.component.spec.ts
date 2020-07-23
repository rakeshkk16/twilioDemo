import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialerInputComponent } from './dialer-input.component';

describe('DialerInputComponent', () => {
  let component: DialerInputComponent;
  let fixture: ComponentFixture<DialerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
