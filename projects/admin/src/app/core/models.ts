export enum stepType {
  exercise,
  intermission,
  intro,
  complete
}

export const stepTypes = () => Object.keys(stepType).filter(k => !isNaN(Number(k)));

export interface Exercise {
  title: string;
  duration: number;
  steptype: string;
  startsAt?: number;
  currentPosition?: number;
  index?: number;
}

export interface Circuit {
  id?: string;
  name: string;
  exercises: Exercise[];
}

export interface State {
  tick: number;
  running: boolean;
}
