import { Component, OnInit } from '@angular/core';
import { Circuit, State } from '../../core/models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ExerciseService } from '../../core/exercise.service';

@Component({
  selector: 'app-host-circuit',
  templateUrl: './host-circuit.component.html',
  styleUrls: ['./host-circuit.component.scss']
})
export class HostCircuitComponent implements OnInit {
  circuit$: Observable<Circuit>;
  state$: Observable<State>;

  ngOnInit(): void {
    this.circuit$ = this.route.data.pipe(map(d => {
      console.log(d)
      return d.circuit as Circuit
    }));
    this.circuit$.subscribe(console.log)
    this.state$ = this.exerciseService.currentExercise();
  }

  constructor(
    private route: ActivatedRoute,
    public exerciseService: ExerciseService
  ) {}
}
