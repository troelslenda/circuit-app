import { Component, OnInit } from '@angular/core';
import { Circuit } from '../../core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CircuitService } from '../../core/circuit.service';

@Component({
  selector: 'app-edit-circuit',
  templateUrl: './edit-circuit.component.html',
  styleUrls: ['./edit-circuit.component.scss']
})
export class EditCircuitComponent implements OnInit {

  circuit$: Observable<Circuit>;
  circuitId: string;

  ngOnInit(): void {
  }

  constructor(private router: Router ,private route: ActivatedRoute, private circuitService: CircuitService) {
    this.circuit$ = route.data.pipe(map(d => d.circuit as Circuit));
  }

  saveCircuit(circuit: Circuit) {
    try {
      this.circuitService.saveCircuit({
        ...circuit,
        id: this.route.snapshot.paramMap.get('id')
      })
      this.router.navigateByUrl('/')
    } catch (e) {
      alert(e.message)
    }
  }
}
