import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCircuitComponent } from './host-circuit.component';

describe('HostCircuitComponent', () => {
  let component: HostCircuitComponent;
  let fixture: ComponentFixture<HostCircuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostCircuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
