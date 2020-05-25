import { Component, OnInit } from '@angular/core';
import { CircuitService } from '../../core/circuit.service';
import { Observable } from 'rxjs';
import { Circuit } from '../../core/models';

@Component({
  selector: 'app-my-circuits',
  templateUrl: './my-circuits.component.html',
  styleUrls: ['./my-circuits.component.scss']
})
export class MyCircuitsComponent implements OnInit {

  circuits$: Observable<Circuit[]>;

  constructor(private circuitService: CircuitService) { }

  ngOnInit(): void {
    this.circuits$ = this.circuitService.loadCircuits();
  }

  deleteCircuit(id: string) {
    this.circuitService.deleteCircuit(id);
  }

}
