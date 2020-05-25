import { Component, OnInit } from '@angular/core';
import { Circuit, State } from '../../core/models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ExerciseService } from '../../core/exercise.service';

@Component({
  selector: 'app-circuit-player',
  templateUrl: './circuit-player.component.html',
  styleUrls: ['./circuit-player.component.scss']
})
export class CircuitPlayerComponent implements OnInit {
  circuit$: Observable<Circuit>;
  state$: Observable<State>;

  ngOnInit(): void {
    this.circuit$ = this.route.data.pipe(map(d => d.circuit as Circuit));
    this.state$ = this.exerciseService.state$;
  }

  constructor(
    private route: ActivatedRoute,
    public exerciseService: ExerciseService
  ) {}
}
