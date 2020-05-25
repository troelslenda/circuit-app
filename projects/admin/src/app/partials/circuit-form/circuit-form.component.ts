import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Circuit, stepType } from '../../core/models';

@Component({
  selector: 'app-circuit-form',
  templateUrl: './circuit-form.component.html',
  styleUrls: ['./circuit-form.component.scss']
})
export class CircuitFormComponent implements OnInit {

  @Input() circuit: Circuit;

  types: string[];

  @Output() savingCircuit: EventEmitter<Circuit> = new EventEmitter<Circuit>();

  circuitForm: FormGroup;

  addExercise() {
    const exercise = this.fb.group({
      title: '',
      description: '',
      duration: 30,
      steptype: stepType.exercise
    });
    this.exerciseForm.push(exercise);
  }

  removeExercise(i: number) {
    this.exerciseForm.removeAt(i);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.types = ['exercise', 'intermission', 'intro', 'complete'];

    this.circuitForm = this.fb.group({
      name: '',
      exercises: this.fb.array([])
    });


    if (this.circuit) {
      this.circuit.exercises.forEach(_ => this.addExercise());
      this.circuitForm.patchValue(this.circuit);
    }

  }

  get exerciseForm() {
    return this.circuitForm.get('exercises') as FormArray;
  }


  saveCircuit() {
    this.savingCircuit.emit(this.circuitForm.value);
  }
  changeType(type, i) {
    console.log(type, i)
  }
}
