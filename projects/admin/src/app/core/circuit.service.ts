import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Circuit } from './models';
import { map, take } from 'rxjs/operators';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CircuitService implements Resolve<Circuit>{

  constructor(private fs: AngularFirestore, private router: Router) { }

  saveCircuit = ({id, ...circuit}: Circuit) =>
    id
    ? this.fs.doc(`circuit/${id}`).update(circuit)
    : this.fs.collection('circuit').add(circuit)


  loadCircuits = () =>
    this.fs.collection('circuit')
      .valueChanges({ idField: 'id' }).pipe(
        map(data => data as Circuit[])
      )

  loadCircuit = (id: string): Observable<Circuit> =>
    this.fs.doc(`circuit/${id}`).valueChanges().pipe(
      take(1),
      map(data => data as Circuit)
    )

  deleteCircuit = (id: string) => this.fs.doc(`circuit/${id}`).delete();

  resolve = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Circuit> =>
    this.loadCircuit(route.paramMap.get('id'))

}
