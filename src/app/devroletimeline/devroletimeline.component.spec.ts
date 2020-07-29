import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevroletimelineComponent } from './devroletimeline.component';

describe('DevroletimelineComponent', () => {
  let component: DevroletimelineComponent;
  let fixture: ComponentFixture<DevroletimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevroletimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevroletimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
