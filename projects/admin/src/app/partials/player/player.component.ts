import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Circuit, State, Exercise } from '../../core/models';
import { ExerciseService } from '../../core/exercise.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnChanges {

  @Input() state: State;
  @Input() circuit: Circuit;

  currentExercise: Exercise;

  nextExercises: Exercise[];

  constructor() { }



  ngOnChanges(): void {
    this.currentExercise = this.FindCurrentExercise();
    this.nextExercises = this.FindNextExercises(this.currentExercise);
  }

  private FindNextExercises(currentExercise) {
    const clone = [...this.circuit.exercises];
    return clone.filter(e => e.index > currentExercise.index).filter(e => e.steptype === "exercise");
  }

  private FindCurrentExercise() {
    const clone = [...this.circuit.exercises];
    clone.reduce((a, v, i) => {
      clone[i].startsAt = a;
      clone[i].index = i;
      return a + v.duration;
    }, 0);
    const tick = this.state?.tick ? this.state.tick : 0;
    const cur = clone.reverse().find(e => e.startsAt <= tick);
    cur.currentPosition = tick - cur.startsAt;
    return cur;
  }
}
