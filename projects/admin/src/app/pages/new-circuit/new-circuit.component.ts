import { Component, OnInit } from '@angular/core';
import { CircuitService } from '../../core/circuit.service';
import { Circuit } from '../../core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-circuit',
  templateUrl: './new-circuit.component.html',
  styleUrls: ['./new-circuit.component.scss']
})
export class NewCircuitComponent implements OnInit {

  constructor(private circuitService: CircuitService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCircuit(circuit: Circuit) {
    try {
    this.circuitService.saveCircuit(circuit);
    this.router.navigateByUrl('/');

  } catch(e) {
    alert('e ' + e.message);
  }
  }

}
