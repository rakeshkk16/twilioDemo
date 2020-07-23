import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuslogComponent } from './statuslog.component';

describe('StatuslogComponent', () => {
  let component: StatuslogComponent;
  let fixture: ComponentFixture<StatuslogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuslogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
