import { Injectable, Inject, Optional } from '@angular/core';
import { Observable, BehaviorSubject, interval, of } from 'rxjs';
import { State } from './models';
import { startWith, scan, map, tap, switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  controls$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  @Inject('stateId') @Optional() public stateId?: string;

  state$: Observable<State>;
  private stateDocRef;

  private initialValue: State = {
    running: false,
    tick: 0
  };

  constructor(private db: AngularFireDatabase) {
    this.stateDocRef = this.db.object(`circuitstate/${this.stateId}`);
    this.state$ = this.stateDocRef.valueChanges();
  }


  currentExercise(): Observable<State> {
    return this.controls$.pipe(
      startWith(this.initialValue),
      scan((state: State, curr): State => ({ ...state, ...curr }), {}),
      switchMap((state: State) => state.running ? interval(1000).pipe(tap(_ => {
        state.tick++;
      }), map(_ => state)) : of(state)),
      tap(state => this.stateDocRef.set(state))
      );
  }

  start() {
    this.controls$.next({running: true});
  }
  pause() {
    this.controls$.next({running: false});
  }
  reset() {
    this.controls$.next(this.initialValue);
  }
  skip() {
    // calculate how many ticks to next step.
  }

}
