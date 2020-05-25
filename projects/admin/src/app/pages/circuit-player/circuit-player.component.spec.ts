import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitPlayerComponent } from './circuit-player.component';

describe('CircuitPlayerComponent', () => {
  let component: CircuitPlayerComponent;
  let fixture: ComponentFixture<CircuitPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
