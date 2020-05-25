import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from '../../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule
  ],
  exports: [
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ]
})
export class FirebaseModule { }
