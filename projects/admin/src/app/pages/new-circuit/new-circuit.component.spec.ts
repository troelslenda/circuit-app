import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCircuitComponent } from './new-circuit.component';

describe('NewCircuitComponent', () => {
  let component: NewCircuitComponent;
  let fixture: ComponentFixture<NewCircuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCircuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
